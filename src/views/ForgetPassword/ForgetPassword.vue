<template>
  <section class="forget-password">
    <h1 class="forget-password__title title-semi-32">Восстановление пароля</h1>
    <ForgetPasswordForm></ForgetPasswordForm>
    <div class="forget-password__help">
      <router-link class="forget-password__link" :to="`/${routerPaths.LOGIN}`"
        >Вернуться ко входу</router-link
      >
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ForgetPasswordForm from "@/views/ForgetPassword/components/ForgetPasswordForm.vue";
import { RouterPaths } from "@/common/consts";

@Component({
  components: { ForgetPasswordForm },
})
export default class ForgetPassword extends Vue {
  routerPaths = RouterPaths;
}
</script>

<style lang="scss" scoped>
.forget-password {
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
