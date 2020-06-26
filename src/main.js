import Vue from "vue";
import VueCompAPI from "@vue/composition-api";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "@/assets/css/style.css";

Vue.config.productionTip = false;
Vue.use(VueCompAPI);

const apps = require.context("@/apps", true, /module.js$/);

apps.keys().map(app => {
  store.registerModule(
    app.substring(app.indexOf("/") + 1, app.lastIndexOf("/")),
    require(`@/apps${app.substr(1)}`).default
  );
});

setTimeout(function() {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
}, 1000);
