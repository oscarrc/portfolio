import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const defaultSettings = {
  dark: false,
  language: "ES",
  background: null
};

export default new Vuex.Store({
  state: {
    apps: [
      {
        name: "Instagram",
        icon: "instagram.png",
        launch: "https://instagram.com/oscarrc_web",
        native: false,
        decked: true
      },
      {
        name: "Github",
        icon: "github.png",
        launch: "https://github.com/oscarrc_web",
        native: false,
        decked: true
      },
      {
        name: "Twitter",
        icon: "twitter.png",
        launch: "https://twitter.com/oscarrc_web",
        native: false,
        decked: true
      },
      {
        name: "Linkedin",
        icon: "linkedin.png",
        launch: "https://www.linkedin.com/in/oscarrc-web",
        native: false,
        decked: true
      },
      {
        name: "About",
        icon: "about.png",
        launch: "/about",
        native: true,
        decked: false,
        color: "light-blue"
        // actions: [
        //   //TODO por qué hay un error
        //   {
        //     name: "Download",
        //     icon: "mdi-download"
        //   }
        // ]
      },
      {
        name: "Portfolio",
        icon: "portfolio.png",
        launch: "/portfolio",
        native: true,
        decked: false,
        color: "purple"
      },
      {
        name: "Contact",
        icon: "contact.png",
        launch: "/contact",
        native: true,
        decked: false,
        color: "light-green"
      },
      {
        name: "Settings",
        icon: "settings.png",
        launch: "/settings",
        native: true,
        decked: false,
        color: "blue-grey"
      }
    ],
    launched: false,
    drawer: true,
    app: {},
    settings: defaultSettings
  },
  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    launchApp(state, app) {
      state.app = app;
      state.launched = true;
    },
    closeApp(state) {
      state.launched = false;
      state.app = {};
    },
    setSettings(state, settings) {
      state.settings = settings;
    },
    resetSettings(state) {
      state.settings = defaultSettings;
    }
  },
  actions: {
    launchApp({ state, commit }, name) {
      let app = state.apps.find(a => {
        return a.name == name;
      });

      commit("launchApp", app);
    }
  },
  modules: {}
});
