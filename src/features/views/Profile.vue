<template>
  <div class="page">
    <div class="profile">
      <div class="profile__card row">
        <div
          class="profile__card_left card-block col-sm-3 text-center text-white"
        >
          <b-avatar class="avatar" rounded="sm" :src="getAvatar()"></b-avatar>
          <!--          <img :src="getAvatar()" class="avatar" alt="User-Profile-Image" />-->
          <h2>{{ user.displayName }}</h2>
          <h5 class="text-warning">{{ user.status }}</h5>
        </div>
        <div class="col-sm-8">
          <div class="card-block">
            <h2 class="m-b-20 b-b-default">Сведения о пользователе:</h2>
            <div class="row">
              <h5>Email:</h5>
              <h6 class="text-muted">{{ user.email }}</h6>
            </div>
            <h2 class="m-b-20 b-b-default">Доски:</h2>
            <div class="row"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { User } from "@/core/models/user.model";

@Component({})
export default class Profile extends Vue {
  @Getter("userInfo", { namespace: "UserStore" })
  private userInfo!: User;

  get user(): User {
    return this.userInfo;
  }

  get avatarUrl(): string {
    return this.userInfo.photoURL || "";
  }

  getAvatar(): string {
    return this.avatarUrl
      ? this.avatarUrl
      : "https://i.ibb.co/zm3YCP3/avatar.png";
  }
}
</script>

<style lang="scss" scoped>
*,
html {
  font-size: $main-font !important;
}

.profile {
  box-sizing: border-box;
  max-width: 100%;

  &__card {
    border-radius: 20px;
  }

  &__card_left {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#f29263),
      to(#ee5a6f)
    );
    background: linear-gradient(to right, #ee5a6f, #f29263);
    border-radius: 20px;

    .avatar {
      border-radius: 20px;
      margin: 20px;
      width: calc(100% - 40px);
      height: auto;
    }
  }
}

.card-block {
  padding: 20px;
}

.m-b-25 {
  margin-bottom: 25px;
}

.card .card-block p {
  line-height: 25px;
}

@media only screen and (min-width: 1400px) {
  p {
    font-size: 14px;
  }
}

.card-block {
  padding: 1.25rem;
}

.b-b-default {
  border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
  margin-bottom: 20px;
}

.text-muted {
  color: #919aa3 !important;
}
</style>
