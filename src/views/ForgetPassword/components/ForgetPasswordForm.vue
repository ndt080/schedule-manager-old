<template>
  <b-form class="form" @submit.prevent="handleSubmit">
    <b-form-group class="form-group" label="Email:">
      <b-form-input
        class="form-control"
        id="emailInput"
        placeholder="Введите email..."
        :state="emailState"
        name="email"
        v-model="email"
        v-validate="validateEmailOption"
      />
      <b-form-invalid-feedback id="emailInput">{{
        errors.first("email")
      }}</b-form-invalid-feedback>
    </b-form-group>
    <b-button class="form-btn" variant="primary" type="submit"
      >Восстановить</b-button
    >
  </b-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { notificationService } from "@/services";
import { namespace } from "vuex-class";

const AuthStore = namespace("AuthStore");

@Component({
  components: {},
})
export default class ForgetPasswordForm extends Vue {
  validateEmailOption = { required: true, email: true };
  errors: any;
  email = "";

  get emailState() {
    if (!this.email) {
      return null;
    }
    return !this.errors.has("email");
  }

  @AuthStore.Action
  public forgetPassword!: (email: string) => Promise<void>;

  handleSubmit() {
    this.$validator.validate().then(async (isValid) => {
      if (isValid) {
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
