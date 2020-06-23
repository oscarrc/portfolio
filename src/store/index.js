import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const appList = () => {
  const apps = require.context("@/apps", true, /config.js$/);

  return apps.keys().map(x => {
    let config = require("@/apps" + x.substr(1)).default;

    config = {
      path: config.path,
      name: config.name,
      decked: config.decked,
      native: config.native,
      color: config.color,
      icon: `${x.substr(1).replace("config.js", "")}icon.png`
    };
    return config;
  });
};

const store = new Vuex.Store({
  state: {
    list: appList(),
    launched: false,
    drawer: true,
    section: 0,
    app: {}
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    launchApp(state, app) {
      state.app = app;
      state.section = 0;
      state.launched = true;
    },
    closeApp(state) {
      state.launched = false;
      state.section = 0;
      state.app = {};
    },
    setSection(state, section) {
      state.section = section;
    }
  },
  actions: {
    launchApp({ state, commit }, name) {
      let app = state.list.find(a => {
        return a.name == name;
      });

      commit("launchApp", app);
    }
  },
  modules: {}
});

(() => {
  const apps = require.context("@/apps", true, /module.js$/);
  apps.keys().map(app => {
    store.registerModule(
      app.substring(app.indexOf("/") + 1, app.lastIndexOf("/")),
      require(`@/apps${app.substr(1)}`).default
    );
    console.log(store);
  });
})();

export default store;
