import vuetify from "@/plugins/vuetify";

const defaultSettings = () => {
  let settings = JSON.parse(localStorage.getItem("settings"));
  let defaultSettings;

  if (settings) {
    defaultSettings = {
      ...settings,
      loading: false
    };
  } else {
    defaultSettings = {
      ...require("./config").default,
      loading: false
    };
  }

  vuetify.framework.theme.dark = defaultSettings.dark;

  return defaultSettings;
};

export default {
  namespaced: true,
  state: defaultSettings(),
  mutations: {
    setSettings(state, settings) {
      state = settings;
    }
  },
  actions: {
    saveSettings({ commit }, settings) {
      commit("setLoading", true, { root: true });
      vuetify.framework.theme.dark = settings.dark;
      commit("setSettings", settings);
      if (settings.privacy)
        localStorage.setItem("settings", JSON.stringify(settings));
      commit("setLoading", false, { root: true });
    },
    resetSettings({ commit }) {
      commit("setLoading", true, { root: true });
      localStorage.removeItem("settings");
      commit("setSettings", defaultSettings());
      commit("setLoading", false, { root: true });
    }
  },
  getters: {
    getSettings(state) {
      return state;
    }
  }
};
