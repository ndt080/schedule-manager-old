<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="nav__logo nav__link">
        <img
          class="nav__logo_img"
          :src="require(`@/assets/img/logo.svg`)"
          alt="logo"
        />
        <span class="nav__logo_text">schedule.manager</span>
      </router-link>

      <div class="nav__menu">
        <portal-target name="toolbar"></portal-target>
      </div>

      <div class="nav__toolbar">
        <b-dropdown variant="link" no-caret right class="dropdown">
          <template #button-content>
            <box-icon
              name="bell"
              type="solid"
              size="34px"
              class="dropdown__icon fa-icon"
            ></box-icon>
          </template>
          <b-dropdown-item>Уведомления отсутствуют</b-dropdown-item>
        </b-dropdown>

        <b-dropdown variant="link" no-caret right class="dropdown">
          <template #button-content>
            <b-avatar
              class="dropdown__icon"
              variant="success"
              :src="getAvatar()"
            ></b-avatar>
          </template>
          <b-dropdown-item
            class="dropdown__item"
            v-for="item of toolDropdown"
            :to="`/${item.link}`"
            :key="item.title"
          >
            {{ item.title }}
          </b-dropdown-item>
          <b-dropdown-item @click="exit()">Выход</b-dropdown-item>
        </b-dropdown>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouterPaths } from "@/core/consts/router-paths.enum.ts";
import { Action, Getter, Mutation } from "vuex-class";
import { User } from "@/core/models/user.model";

interface navBarItem {
  title: string;
  link: RouterPaths;
}

@Component({
  components: {},
})
export default class NavigationBar extends Vue {
  @Action("logout", { namespace: "AuthStore" })
  public logout!: () => Promise<void>;

  @Mutation("CLEAR_USER", { namespace: "UserStore" })
  public CLEAR_USER!: () => void;

  @Getter("userInfo", { namespace: "UserStore" })
  private userInfo!: User;

  toolDropdown = [
    { title: "Профиль", link: RouterPaths.PROFILE, icon: "" } as navBarItem,
    { title: "Настройки", link: RouterPaths.HOME, icon: "" } as navBarItem,
  ];
  navItems = [];
  // navItems = [
  //   { title: "Главная", link: RouterPaths.HOME, icon: "home" } as navBarItem,
  //   { title: "FAQ", link: RouterPaths.HOME, icon: "info-circle" } as navBarItem,
  // ];

  async exit(): Promise<void> {
    await this.logout();
    await this.CLEAR_USER();
    await this.$router.push(`/${RouterPaths.LOGIN}`);
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
.header {
  box-shadow: $main-shadow;
  font-size: 18px;
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: $desktop-top-nav-padding;
}

.nav__logo {
  display: inline-block;
  font-weight: 400;
  text-decoration: none;
  color: $dark-color;

  &_img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
}
.nav__menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav__toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav__icon {
  line-height: 0;
  fill: $dark-color;
}

.dropdown {
  &__icon {
    fill: $dark-color;
  }

  &__icon.fa-icon {
    padding-top: 5px;
  }
}

@media (max-width: 750px) {
  .header {
    max-height: 50px;
  }

  .nav {
    padding: $mobile-top-nav-padding;
  }

  .dropdown {
    &__icon {
      width: 35px;
      height: 35px;
      margin-top: -2px;
    }
    &__icon.fa-icon {
      padding: 0;
      margin-top: 2px;
    }
  }
}
@media (max-width: 450px) {
  .nav__logo {
    &_img {
      width: 35px;
      height: 35px;
    }
    &_text {
      display: none;
    }
  }
}
</style>
