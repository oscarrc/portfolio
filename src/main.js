import Vue from "vue";
import VueCompAPI from "@vue/composition-api";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Fingerprint2 from "fingerprintjs2";

import "@/assets/css/style.css";

Vue.config.productionTip = false;
Vue.use(VueCompAPI);

if (window.requestIdleCallback) {
  requestIdleCallback(function() {
    Fingerprint2.get(function(components) {
      var values = components.map(function(component) {
        return component.value;
      });
      var fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
      console.log(fingerprint);
    });
  });
} else {
  setTimeout(function() {
    Fingerprint2.get(function(components) {
      var values = components.map(function(component) {
        return component.value;
      });
      var fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
      console.log(fingerprint);
    });
  }, 500);
}

setTimeout(function() {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
}, 1000);
