<template>
  <section class="register">
    <h1 class="register__title title-semi-32">Создание аккаунта</h1>
    <SignUpForm></SignUpForm>
    <div class="register__help">
      <div>
        Уже имеется аккаунт?
        <router-link class="register__link" :to="`/${routerPaths.LOGIN}`"
          >Войти</router-link
        >
      </div>
      <router-link
        class="register__link"
        :to="`/${routerPaths.FORGET_PASSWORD}`"
        >Восстановить пароль</router-link
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignUpForm from "@/views/Register/components/SignUpForm.vue";
import { RouterPaths } from "@/common/consts";

@Component({
  components: { SignUpForm },
})
export default class Register extends Vue {
  routerPaths = RouterPaths;
}
</script>

<style lang="scss" scoped>
.register {
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
