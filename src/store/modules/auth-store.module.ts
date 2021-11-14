import { VuexModule, Module, Action } from "vuex-module-decorators";
import { User } from "@/common/models";
import { AuthStatus, UserStatus } from "@/common/consts";
import { authStorageService, notificationService } from "@/services";

import firebase from "firebase/compat";

@Module({ namespaced: true })
class AuthStore extends VuexModule {
  @Action
  public async login(user: User): Promise<void> {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password as string)
      .then((userCredential) => {
        if (userCredential.user?.emailVerified) {
          authStorageService.setAuth(AuthStatus.AUTH_TRUE);
          notificationService.success("Успешная авторизация!");
        } else {
          authStorageService.setAuth(AuthStatus.AUTH_NEED_VERIFICATION);
          notificationService.warning("Подтвердите адрес электронной почты");
        }
      })
      .catch((e) => {
        notificationService.error(e.toString());
      });
  }

  @Action
  public async logout(): Promise<void> {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        authStorageService.removeAuth();
      })
      .catch((e) => {
        notificationService.error(e.toString());
      });
  }
  @Action
  public async forgetPassword(email: string): Promise<void> {
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        notificationService.success(
          "Проверьте свой зарегистрированный адрес электронной почты, чтобы сбросить пароль"
        );
      })
      .catch((e) => {
        notificationService.error(e.toString());
      });
  }
  @Action
  public async signUp(user: User): Promise<void> {
    try {
      let uid;
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password as string);
      await firebase.auth().onAuthStateChanged((userCredential) => {
        if (userCredential) {
          userCredential.sendEmailVerification().then(() => {
            notificationService.warning("Send verification mail!");
          });
          uid = userCredential.uid;
          user.status = UserStatus.USER;
          user.photoURL = "https://i.ibb.co/zm3YCP3/avatar.png";
          user.password = null;
        }
      });
      await firebase.database().ref(`/users/${uid}/info`).set(user);
    } catch (e) {
      notificationService.error(e.toString());
    }
  }
}

export default AuthStore;
