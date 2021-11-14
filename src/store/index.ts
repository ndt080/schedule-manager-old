import Vue from "vue";
import Vuex from "vuex";
import AuthStore from "@/store/modules/auth-store.module";
import UserStore from "@/store/modules/user-store.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { AuthStore, UserStore },
});
