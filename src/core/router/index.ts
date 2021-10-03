import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import firebase from "firebase/compat/app";
import { RouterPaths } from "@/core/consts/router-paths.enum.ts";

import Home from "@/features/views/Home.vue";
import Login from "@/features/auth/views/Login.vue";
import Profile from "@/features/views/Profile.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: `/${RouterPaths.HOME}`,
    name: "Home",
    meta: { layout: "home", auth: true },
    component: Home,
  },
  {
    path: `/${RouterPaths.PROFILE}`,
    name: "Profile",
    meta: { layout: "home", auth: true },
    component: Profile,
  },
  {
    path: `/${RouterPaths.LOGIN}`,
    name: "Login",
    meta: { layout: "empty", auth: false },
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some((record) => record.meta.auth);

  if (requireAuth && !currentUser) {
    next(`/${RouterPaths.LOGIN}`);
  } else {
    next();
  }
});

export default router;
