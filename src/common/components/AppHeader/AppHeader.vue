<template>
  <header class="header">
    <div class="header__container">
      <Logo></Logo>
      <div class="header__toolbar">
        <b-dropdown
          class="header__dropdown dropdown"
          variant="link"
          no-caret
          right
        >
          <template #button-content class="dropdown__icon_box">
            <box-icon
              name="bell"
              type="solid"
              size="34px"
              class="dropdown__icon fa-icon"
            ></box-icon>
          </template>
          <b-dropdown-item>Уведомления отсутствуют</b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          class="header__dropdown dropdown"
          variant="link"
          no-caret
          right
        >
          <template #button-content>
            <b-avatar
              class="dropdown__icon"
              :src="getAvatar()"
              variant="success"
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
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation } from "vuex-class";
import { RouterPaths } from "@/common/consts";
import { ToolbarItems } from "./consts/toolbar-items.const";
import { User } from "@/common/models";

import Logo from "./components/Logo.vue";

@Component({
  components: { Logo },
})
export default class AppHeader extends Vue {
  routerPaths = RouterPaths;
  @Action("logout", { namespace: "AuthStore" })
  public logout!: () => Promise<void>;

  @Mutation("CLEAR_USER", { namespace: "UserStore" })
  public CLEAR_USER!: () => void;

  @Getter("userInfo", { namespace: "UserStore" })
  private userInfo!: User;

  toolDropdown = ToolbarItems;

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
  display: flex;
  align-items: center;
  min-height: 60px;
  padding: 15px 50px;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &__toolbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.dropdown__icon_box {
  display: flex;
  align-items: center;
  height: 100%;
}

@media (max-width: 550px) {
  .header {
    padding: 0 20px;
  }
}
</style>
