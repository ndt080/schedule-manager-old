<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import HomeLayout from "@/features/layouts/HomeLayout.vue";
import EmptyLayout from "@/features/layouts/EmptyLayout.vue";

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    },
  },
  components: {
    EmptyLayout,
    HomeLayout,
  },
};
</script>
