<template>
  <div class="layout">
    <div class="layout__content">
      <AuthViewHeader></AuthViewHeader>
      <router-view />
    </div>
    <div class="layout__preview">
      <div
        class="layout__preview_wrapper"
        :style="{
          backgroundImage: `url(${require(`@/assets/img/bg-login.png`)})`,
        }"
      >
        <div class="layout__preview_title title-regular-28">
          Отлично походит для <br />
          <b>РАСПИСАНИЯ ЗАНЯТИЙ</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AuthViewHeader from "@/common/components/AuthViewHeader.vue";

@Component({
  name: "AuthLayout",
  components: { AuthViewHeader },
})
export default class AuthLayout extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  &__content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 25px 50px;
  }

  &__preview {
    background-color: $mint-color;
    border-radius: 40px 0 0 40px;
  }

  &__preview_wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    box-sizing: border-box;
    background-position: left;
    background-size: cover;

    border-radius: 40px 0 0 40px;
  }

  &__preview_title {
    position: absolute;
    top: 20%;
    left: 15%;
    text-align: center;
  }

  &__preview img {
    width: 100%;
    max-height: 99vh;
  }
}

@media (max-width: 850px) {
  .layout {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    grid-template-rows: 1fr;
  }

  .layout_preview_title {
    left: 20px;
  }
}

@media (max-width: 680px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .layout__preview {
    display: none;
  }
}
</style>
