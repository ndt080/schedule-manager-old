<template>
  <div class="login-layout">
    <header class="header">
      <router-link to="/" class="header__logo">
        <img
          :src="require(`@/assets/img/logo.svg`)"
          alt="logo"
          width="25"
          height="25"
        />
        schedule.manager
      </router-link>
    </header>
    <div class="body">
      <template v-if="changeAuthForm && !changeForgetPasswordForm">
        <SignInForm></SignInForm>
        <div
          class="btn-reset-password"
          v-on:click="changeForgetPasswordForm = !changeForgetPasswordForm"
        >
          Восстановить пароль
        </div>
        <div class="form__help">
          Отсутствует аккаунт?
          <span
            class="form__help-link"
            v-on:click="
              () => {
                changeAuthForm = !changeAuthForm;
                changeForgetPasswordForm = false;
              }
            "
          >
            Зарегистрироваться
          </span>
        </div>
      </template>
      <template v-if="!changeAuthForm && !changeForgetPasswordForm">
        <SignUpForm></SignUpForm>
        <div class="form__help">
          Уже имеется аккаунт?
          <span
            class="form__help-link"
            v-on:click="
              () => {
                changeAuthForm = !changeAuthForm;
                changeForgetPasswordForm = false;
              }
            "
          >
            Войти
          </span>
        </div>
      </template>
      <template v-if="changeForgetPasswordForm">
        <ForgetPasswordForm></ForgetPasswordForm>
        <div class="form__help">
          <span
            class="form__help-link"
            v-on:click="
              () => {
                changeAuthForm = !changeAuthForm;
                changeForgetPasswordForm = false;
              }
            "
          >
            Назад
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignInForm from "@/features/auth/components/SignInForm.vue";
import SignUpForm from "@/features/auth/components/SignUpForm.vue";
import ForgetPasswordForm from "@/features/auth/components/ForgetPasswordForm.vue";

@Component({
  components: { ForgetPasswordForm, SignUpForm, SignInForm },
})
export default class Login extends Vue {
  changeAuthForm = true;
  changeForgetPasswordForm = false;
}
</script>

<style lang="scss" scoped>
.login-layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  box-sizing: border-box;
  padding: 25px 50px;

  .header {
    font-size: 24px;
    margin-bottom: 50px;
  }

  .header__logo {
    display: inline-block;
    font-weight: 400;
    text-decoration: none;
    color: $dark-color;
  }

  .header__logo img {
    margin-right: 8px;
  }

  .form__help {
    text-align: center;
    margin: 25px 0;
  }

  .form__help-link {
    color: $purple-color !important;
    cursor: pointer;
  }

  .btn-reset-password {
    text-align: center;
    margin: 25px 0 0 0;
  }

  .btn-reset-password:hover {
    text-align: center;
    margin: 25px 0;
    color: #3740ff;
    cursor: pointer;
  }
}

@media (max-width: 400px) {
  .login-layout {
    .header {
      font-size: 18px;
    }
  }
}
</style>
