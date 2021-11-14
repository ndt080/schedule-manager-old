<template>
  <div class="layout" v-if="loader">
    <AppHeader></AppHeader>
    <main class="layout__main">
      <NavigationBar></NavigationBar>
      <router-view />
    </main>
  </div>
  <Loader v-else></Loader>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { notificationService } from "@/services";
import { User } from "@/common/models";

import NavigationBar from "@/common/components/NavigationBar/NavigationBar.vue";
import AppHeader from "@/common/components/AppHeader/AppHeader.vue";
import Loader from "@/common/components/Loader/Loader.vue";

@Component({
  components: { Loader, NavigationBar, AppHeader },
})
export default class HomeLayout extends Vue {
  loader = false;

  @Action("fetchUserInfo", { namespace: "UserStore" })
  private fetchUserInfo!: () => Promise<void>;

  @Getter("userInfo", { namespace: "UserStore" })
  private userInfo!: User;

  async mounted(): Promise<void> {
    try {
      await this.fetchUserInfo();
      this.loader = true;
    } catch (error) {
      notificationService.error(error.toString());
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  &__main {
    display: grid;
    box-sizing: border-box;
    grid-template-columns: auto 1fr;
    background: $light-bg;
    border-radius: 2rem;
    width: calc(100% - 20px);
    height: calc(100vh - 60px - 10px);
    margin: 0 10px 10px 10px;
    padding: 20px;
  }
}
@media (max-width: 850px) {
  .layout {
    &__main {
      height: 100vh;
    }
  }
}
</style>
