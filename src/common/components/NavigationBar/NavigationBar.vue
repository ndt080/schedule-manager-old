<template>
  <section class="wrapper">
    <nav class="navbar">
      <div class="navbar__container">
        <ul class="navbar__list">
          <li
            class="navbar__item"
            v-for="item of navigationItems"
            :key="item.icon"
          >
            <router-link class="navbar__link" :to="item.url">
              <b-icon class="navbar__icon" :icon="item.icon"></b-icon>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouterPaths } from "@/common/consts";
import { NavigationItems } from "./consts/navigation-items.const";

@Component({
  components: {},
})
export default class NavigationBar extends Vue {
  routerPaths = RouterPaths;
  navigationItems = NavigationItems;
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 110%;
  width: 105px;
}

.navbar {
  position: fixed;
  left: 20px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 100000;

  &__container {
    box-sizing: border-box;
    width: 90px;
    max-height: calc(100vh - 60px - 10px);
    border-radius: 1rem;
    background: $main-bg-color;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  &__item {
    width: 100%;
    height: 4.5rem;
    border-radius: 1rem;
    transition-duration: 0.5s;
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: $main-color;
  }

  &__item:hover {
    background: $hover-color;
  }

  &__icon {
    font-size: 2rem;
    font-weight: 900;
    color: $main-color;
  }
}

@media (max-width: 850px) {
  .wrapper {
    width: 0;
  }
  .navbar {
    position: fixed;
    margin: 0;
    height: 70px;
    bottom: 20px;
    right: 0;
    left: 0;

    &__container {
      width: 100%;
      height: 70px;
    }

    &__list {
      flex-direction: row;
    }
  }
}
</style>
