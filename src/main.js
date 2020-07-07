import Vue from "vue";
import VueCompAPI from "@vue/composition-api";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "@/assets/css/style.css";

Vue.config.productionTip = false;
Vue.use(VueCompAPI);

setTimeout(function() {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");
}, 1000);
