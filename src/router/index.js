import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Main from "@/views/main";
import About from "@/views/apps/about";
import Contact from "@/views/apps/contact";
import Portfolio from "@/views/apps/portfolio";
import Settings from "@/views/apps/settings";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
    children: [
      {
        path: "/about",
        name: "About",
        component: About,
        meta: { app: true }
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: { app: true }
      },
      {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio,
        meta: { app: true }
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
        meta: { app: true }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(to => {
  if (to.meta.app) {
    store.dispatch("launchApp", to.name);
  } else {
    store.commit("closeApp");
  }
});

export default router;
