import { appsService } from "@/services";

export const apps = {
  namespaced: true,
  state: {
    apps: [],
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
    setApps(state, apps) {
      state.apps = apps;
    },
    setSection(state, section) {
      state.section = section;
    }
  },
  actions: {
    getApps({ commit }) {
      appsService.getApps().then(apps => {
        commit("setApps", apps);
      });
    },
    launchApp({ state, commit }, name) {
      let app = state.apps.find(a => {
        return a.name == name;
      });

      commit("launchApp", app);
    }
  },
  modules: {}
};
