import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "./registerServiceWorker";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

import VeeValidate from "vee-validate";
import Toast from "vue-toastification";
import PortalVue from "portal-vue";
import "vue-toastification/dist/index.css";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "boxicons";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VeeValidate);
Vue.use(PortalVue);
Vue.use(Toast, {
  position: "top-right",
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  timeout: 5000,
});

firebase.initializeApp({
  apiKey: "AIzaSyCas2gpyOQl_Jn1wWHeAvYR3dIKvy571vQ",
  authDomain: "schedule-mngr.firebaseapp.com",
  databaseURL:
    "https://schedule-mngr-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "schedule-mngr",
  storageBucket: "schedule-mngr.appspot.com",
  messagingSenderId: "706962925454",
  appId: "1:706962925454:web:8c9a22c9e7236dd4df26df",
});

export let app: Vue;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
