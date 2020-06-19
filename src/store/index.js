import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false,
    settings: {
      dark: false,
      language: "ES",
      background: null
    }
  },
  mutations: {
    toggleApp(state) {
      state.isOpen = !state.isOpen;
    }
  },
  actions: {},
  modules: {}
});
