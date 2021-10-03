import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";
import firebase from "firebase/compat";
import { User } from "@/core/models/user.model";
import { notificationService } from "@/core/services/notification.service";

@Module({ namespaced: true })
class UserStore extends VuexModule {
  user: User;
  uid: string;

  @Mutation
  SET_USER(user: User): void {
    this.user = user;
  }

  @Mutation
  SET_UID(uid: string): void {
    this.uid = uid;
  }

  @Mutation
  CLEAR_USER(): void {
    this.user = {} as User;
    this.uid = "";
  }

  @Action
  async fetchUserInfo(): Promise<void> {
    await this.context.dispatch("fetchUID");
    try {
      const user = (
        await firebase
          .database()
          .ref(`/users/${this.context.getters.UID}/info`)
          .once("value")
      ).val();
      this.context.commit("SET_USER", user);
    } catch (e) {
      notificationService.error(e.toString());
    }
  }

  @Action
  async fetchUID(): Promise<void> {
    try {
      const user = await firebase.auth().currentUser;
      this.context.commit("SET_UID", user ? user.uid : null);
    } catch (e) {
      notificationService.error(e.toString());
    }
  }

  get userInfo(): User {
    return this.user;
  }
  get UID(): string {
    return this.uid;
  }
}

export default UserStore;
