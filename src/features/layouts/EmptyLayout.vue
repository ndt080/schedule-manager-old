<template>
  <div class="empty-layout">
    <router-view />
    <div class="layout-container">
      <div class="layout-container__title">
        Отлично походит для <br />
        <b>РАСПИСАНИЯ ЗАНЯТИЙ</b>
      </div>
      <img alt="bg-cat" :src="require(`@/assets/img/bg-login.png`)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "EmptyLayout",
  components: {},
})
export default class EmptyLayout extends Vue {}
</script>

<style lang="scss" scoped>
.empty-layout {
  display: grid;
  font-family: "Montserrat", sans-serif;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.layout-container {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  box-sizing: border-box;
  background-color: $mint-color;
}

.layout-container__title {
  position: absolute;
  font-size: 30px;
  top: 20%;
  left: 15%;
  text-align: center;
}

.layout-container img {
  width: 100%;
  max-height: 99vh;
}

@media (max-width: 850px) {
  .empty-layout {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    grid-template-rows: 1fr;
  }

  .layout-container__title {
    left: 20px;
  }
}

@media (max-width: 680px) {
  .empty-layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .layout-container {
    display: none;
  }
}
</style>
