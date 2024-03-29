<template>
  <b-form class="form" @submit.prevent="handleSubmit">
    <b-form-group class="form-group" label="Email:">
      <b-form-input
        class="form-control"
        id="emailInput"
        placeholder="Введите email..."
        :state="emailState"
        name="email"
        v-model="user.email"
        v-validate="validateEmailOption"
      />
      <b-form-invalid-feedback id="emailInput">{{
        errors.first("email")
      }}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group class="form-group" label="Пароль:">
      <b-form-input
        class="form-control"
        id="passwordInput"
        placeholder="Введите пароль..."
        :state="passwordState"
        name="password"
        type="password"
        v-model="user.password"
        v-validate="validatePasswordOption"
      />
      <b-form-invalid-feedback id="passwordInput">{{
        errors.first("password")
      }}</b-form-invalid-feedback>
    </b-form-group>
    <b-button class="form-btn" variant="primary" type="submit">Войти</b-button>
  </b-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouterPaths, AuthStatus } from "@/common/consts";
import { authStorageService, notificationService } from "@/services";
import { User } from "@/common/models";

import { namespace } from "vuex-class";

const AuthStore = namespace("AuthStore");

@Component({
  components: {},
})
export default class SignInForm extends Vue {
  validateEmailOption = { required: true, email: true };
  validatePasswordOption = { required: true, min: 6 };
  errors: any;
  user: User = {
    email: "",
    password: "",
  };

  @AuthStore.Action
  public login!: (user: User) => Promise<void>;

  get emailState(): boolean | null {
    if (!this.user.email) {
      return null;
    }
    return !this.errors.has("email");
  }

  get passwordState(): boolean | null {
    if (!this.user.password) {
      return null;
    }
    return !this.errors.has("password");
  }

  handleSubmit(): void {
    this.$validator.validate().then(async (valid) => {
      if (valid) {
        try {
          await this.login(this.user);
          if (authStorageService.getAuth() === AuthStatus.AUTH_TRUE) {
            await this.$router.push(`/${RouterPaths.HOME}`);
          }
        } catch (error) {
          notificationService.error(error.toString());
        }
      }
    });
  }
}
</script>

<style scoped>
.form-group {
  margin: 10px 0 20px 0;
}

.form-control {
  display: block;
  width: 300px !important;
  min-height: 28px;
  box-sizing: border-box;
}

.form-btn {
  width: 150px !important;
}
</style>
