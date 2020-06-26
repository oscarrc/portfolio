import vuetify from "@/plugins/vuetify";

const defaultSettings = () => {
  let settings = JSON.parse(localStorage.getItem("settings"));

  return {
    dark: settings?.dark || false,
    privacy: settings?.privacy || false,
    background: {
      name: settings?.background.name || "default",
      image: settings?.background.image || null
    },
    language: settings?.language || "en_US"
  };
};

export default {
  namespaced: true,
  state: defaultSettings(),
  mutations: {
    setSettings(state, settings) {
      state.settings = settings;
    }
  },
  actions: {
    saveSettings({ commit }, settings) {
      vuetify.framework.theme.dark = settings.dark;
      commit("setSettings", settings);
      if (settings.privacy)
        localStorage.setItem("settings", JSON.stringify(settings));
    },
    resetSettings({ commit }) {
      localStorage.removeItem("settings");
      commit("setSettings", defaultSettings());
    }
  },
  getters: {
    getSettings(state) {
      return state.settings;
    }
  }
};
