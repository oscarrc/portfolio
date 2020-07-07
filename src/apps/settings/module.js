import vuetify from "@/plugins/vuetify";

const defaultSettings = () => {
  let settings = JSON.parse(localStorage.getItem("settings"));
  let defaultSettings;

  if (settings) {
    defaultSettings = {
      ...require("./config").default,
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
      state.dark = settings.dark;
      state.language = settings.language;
      state.background.name = settings.background.name;
      state.background.image = settings.background.image;
      state.privacy = settings.privacy;
    }
  },
  actions: {
    saveSettings({ commit }, settings) {
      vuetify.framework.theme.dark = settings.dark;

      commit("setLoading", true, { root: true });
      commit("setSettings", settings);

      if (settings.privacy)
        localStorage.setItem("settings", JSON.stringify(settings));
      else localStorage.clear();

      commit("setLoading", false, { root: true });
    },
    resetSettings({ commit }) {
      commit("setLoading", true, { root: true });
      commit("setSettings", defaultSettings());
      commit("setLoading", false, { root: true });
      localStorage.removeItem("settings");
    }
  },
  getters: {
    getSettings(state) {
      return state;
    }
  }
};
