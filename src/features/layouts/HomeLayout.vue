<template>
  <div class="home-layout" v-if="loader">
    <NavigationBar />
    <router-view />
  </div>
  <Loader v-else></Loader>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavigationBar from "@/shared/components/NavigationBar.vue";
import { Action, Getter } from "vuex-class";
import { User } from "@/core/models/user.model";
import Loader from "@/shared/components/Loader.vue";

@Component({
  components: { Loader, NavigationBar },
})
export default class HomeLayout extends Vue {
  @Action("fetchUserInfo", { namespace: "UserStore" })
  private fetchUserInfo!: () => Promise<void>;

  @Getter("userInfo", { namespace: "UserStore" })
  private userInfo!: User;

  loader = false;

  async mounted(): Promise<void> {
    try {
      await this.fetchUserInfo();
      this.loader = true;
      console.log("THIS USER: ", this.userInfo);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style lang="scss">
.page {
  padding: $desktop-padding;
}

@media (max-width: 750px) {
  .page {
    padding: $mobile-padding;
  }
}
</style>
