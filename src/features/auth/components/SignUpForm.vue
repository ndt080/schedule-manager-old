<template>
  <b-form class="form" @submit.prevent="handleSubmit">
    <h1 class="form_title">Создание аккаунта</h1>
    <b-form-group class="form-group" label="Имя:">
      <b-form-input
        class="form-control"
        id="nameInput"
        placeholder="Введите имя..."
        :state="nameState"
        name="name"
        v-model="user.displayName"
        v-validate="{ required: true }"
      />
      <b-form-invalid-feedback id="nameInput">
        {{ errors.first("name") }}
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group class="form-group" label="Email:">
      <b-form-input
        class="form-control"
        id="emailInput"
        placeholder="Введите email..."
        :state="emailState"
        name="email"
        v-model="user.email"
        v-validate="{ required: true, email: true }"
      />
      <b-form-invalid-feedback id="emailInput">
        {{ errors.first("email") }}
      </b-form-invalid-feedback>
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
        v-validate="{ required: true, min: 6 }"
      />
      <b-form-invalid-feedback id="passwordInput">
        {{ errors.first("email") }}
      </b-form-invalid-feedback>
    </b-form-group>

    <b-button class="form-btn" variant="primary" type="submit"
      >Создать</b-button
    >
  </b-form>
</template>

<script lang="ts">
import { notificationService } from "@/core/services/notification.service";
import { Component, Vue } from "vue-property-decorator";
import { User } from "@/core/models/user.model";

import { namespace } from "vuex-class";
const AuthStore = namespace("AuthStore");

@Component({
  components: {},
})
export default class SignUpForm extends Vue {
  errors: any;
  public user: User = {
    displayName: "",
    email: "",
    password: "",
  };

  @AuthStore.Action
  public signUp!: (user: User) => Promise<void>;

  get nameState(): boolean | null {
    if (!this.user.name) {
      return null;
    }
    return !this.errors.has("name");
  }
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
          await this.signUp(this.user);
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

.btn-reset-password {
  text-align: center;
  margin: 25px 0;
}
</style>
