import Vue from "vue";
import Vuex from "vuex";
import { apps } from "./apps.store";

Vue.use(Vuex);

const defaultSettings = {
  dark: false,
  language: "ES",
  background: null
};

export default new Vuex.Store({
  state: {
    settings: defaultSettings
  },
  mutations: {},
  actions: {},
  modules: {
    apps
  }
});
