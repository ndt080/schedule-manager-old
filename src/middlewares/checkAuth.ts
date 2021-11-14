import Vue from "vue";
import { NavigationGuardNext } from "vue-router";
import { RouterPaths } from "@/common/consts";

export default function checkAuth(
  next: NavigationGuardNext<Vue>,
  isAuthenticated: boolean
) {
  if (isAuthenticated) {
    next();
  } else {
    next(`/${RouterPaths.LOGIN}`);
  }
}
