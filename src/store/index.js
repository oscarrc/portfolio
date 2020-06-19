import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false,
    isNative: false,
    launchCommand: ""
  },
  mutations: {
    toggleApp(state, launch, native) {
      state.isOpen = !state.isOpen;
      state.isNative = native;
      state.launchCommand = launch;
    }
  },
  actions: {},
  modules: {}
});
