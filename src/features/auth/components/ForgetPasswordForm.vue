<template>
  <b-form class="form" @submit.prevent="handleSubmit">
    <h1 class="form_title">Восстановление пароля</h1>
    <b-form-group class="form-group" label="Email:">
      <b-form-input
        class="form-control"
        id="emailInput"
        placeholder="Введите email..."
        :state="emailState"
        name="email"
        v-model="email"
        v-validate="{ required: true, email: true }"
      />
      <b-form-invalid-feedback id="emailInput">
        {{ errors.first("email") }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-button class="form-btn" variant="primary" type="submit"
      >Восстановить</b-button
    >
  </b-form>
</template>

<script lang="ts">
import { notificationService } from "@/core/services/notification.service";
import { Component, Vue } from "vue-property-decorator";

import { namespace } from "vuex-class";
const AuthStore = namespace("AuthStore");

@Component({
  components: {},
})
export default class ForgetPasswordForm extends Vue {
  errors: any;
  email: string;

  get emailState(): boolean | null {
    if (!this.email) {
      return null;
    }
    return !this.errors.has("email");
  }

  @AuthStore.Action
  public forgetPassword!: (email: string) => Promise<void>;

  handleSubmit(): void {
    this.$validator.validate().then(async (valid) => {
      if (valid) {
        try {
          await this.forgetPassword(this.email);
        } catch (e) {
          notificationService.error(e.toString());
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
