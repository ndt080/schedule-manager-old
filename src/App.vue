<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    },
  },
  components: {
    AuthLayout,
    HomeLayout,
  },
};
</script>
