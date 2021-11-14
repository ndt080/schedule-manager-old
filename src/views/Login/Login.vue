<template>
  <section class="login">
    <h1 class="login__title title-semi-32">Войти</h1>
    <SignInForm></SignInForm>
    <div class="login__help">
      <div>
        Отсутствует аккаунт?
        <router-link class="login__link" :to="`/${routerPaths.REGISTER}`"
          >Зарегистрироваться</router-link
        >
      </div>
      <router-link class="login__link" :to="`/${routerPaths.FORGET_PASSWORD}`"
        >Восстановить пароль</router-link
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignInForm from "@/views/Login/components/SignInForm.vue";
import { RouterPaths } from "@/common/consts";

@Component({
  components: { SignInForm },
})
export default class Login extends Vue {
  routerPaths = RouterPaths;
}
</script>

<style lang="scss" scoped>
.login {
  &__help {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 30px 0;
  }

  &__link {
    text-decoration: none;
    cursor: pointer;
    color: $main-color;
  }

  &__link:hover {
    color: $orange-color;
  }
}
</style>
