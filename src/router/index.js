import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Main from "@/views/main";

Vue.use(VueRouter);

const appRoutes = () => {
  const apps = require.context("@/apps", true, /config.js$/);
  return apps.keys().map(x => {
    let config = require("@/apps" + x.substr(1)).default;
    return {
      path: config.path,
      name: config.name,
      component: () =>
        import(`@/apps${x.substr(1).replace("config.js", "index")}`),
      meta: {
        native: config.native
      }
    };
  });
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
    children: appRoutes()
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(to => {
  if (to.meta.native) {
    store.dispatch("launchApp", to.name, { root: true });
  } else {
    store.commit("closeApp");
  }
});

export default router;
