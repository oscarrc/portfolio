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
        color: "light-blue",
        actions: [
          {
            name: "Download",
            icon: "mdi-download"
          },
          {
            name: "Download",
            icon: "mdi-download"
          }
        ],
        sections: [
          {
            name: "Personal profile",
            icon: "mdi-account"
          },
          {
            name: "Education history",
            icon: "mdi-school"
          },
          {
            name: "Work Experience",
            icon: "mdi-briefcase"
          },
          {
            name: "Areas of expertise",
            icon: "mdi-code-tags-check"
          },
          {
            name: "Other skills",
            icon: "mdi-code-tags"
          },
          {
            name: "Languages",
            icon: "mdi-web"
          }
        ]
      },
      {
        name: "Portfolio",
        icon: "portfolio.png",
        launch: "/portfolio",
        native: true,
        decked: false,
        color: "purple",
        actions: [
          {
            name: "Filter",
            icon: "mdi-filter"
          }
        ],
        sections: [
          {
            name: "All",
            icon: "mdi-check-circle-outline"
          },
          {
            name: "Frontend",
            icon: "mdi-xml"
          },
          {
            name: "Backend",
            icon: "mdi-code-braces"
          }
        ]
      },
      {
        name: "Contact",
        icon: "contact.png",
        launch: "/contact",
        native: true,
        decked: false,
        color: "light-green",
        sections: [
          {
            name: "Inbox",
            icon: "mdi-inbox"
          },
          {
            name: "Sent",
            icon: "mdi-send-outline"
          },
          {
            name: "Trash",
            icon: "mdi-trash-can-outline"
          }
        ]
      },
      {
        name: "Settings",
        icon: "settings.png",
        launch: "/settings",
        native: true,
        decked: false,
        color: "blue-grey",
        actions: [
          {
            name: "Save",
            icon: "mdi-content-save"
          }
        ],
        sections: [
          {
            name: "Display",
            icon: "mdi-monitor"
          },
          {
            name: "Language",
            icon: "mdi-translate"
          },
          {
            name: "Licenses",
            icon: "mdi-license"
          },
          {
            name: "Factory reset",
            icon: "mdi-undo-variant"
          }
        ]
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
