import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import firebase from "firebase/compat/app";
import { RouterPaths } from "@/common/consts";

import { Home, Login, Register, ForgetPassword, Profile } from "@/views";
import checkAuth from "@/middlewares/checkAuth";

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
    meta: { layout: "auth", auth: false },
    component: Login,
  },
  {
    path: `/${RouterPaths.REGISTER}`,
    name: "Register",
    meta: { layout: "auth", auth: false },
    component: Register,
  },
  {
    path: `/${RouterPaths.FORGET_PASSWORD}`,
    name: "Forget password",
    meta: { layout: "auth", auth: false },
    component: ForgetPassword,
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

  checkAuth(next, !(requireAuth && !currentUser));
});

export default router;
