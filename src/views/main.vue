<template>
  <v-app>
    <notifications />
    <v-main width="100vw" class="pa-0">
      <display :apps="undeckedApps" />
      <application />
    </v-main>
    <deck :apps="deckedApps" />
  </v-app>
</template>

<script>
import application from "@/components/application";
import notifications from "@/components/notifications";
import deck from "@/components/deck";
import display from "@/components/display";

export default {
  name: "Main",
  components: {
    application,
    notifications,
    display,
    deck
  },
  data() {
    return {
      apps: [
        {
          name: "Instagram",
          icon: "instagram.png",
          launch: "https://instagram.com",
          native: false,
          decked: true
        },
        {
          name: "Github",
          icon: "github.png",
          launch: "https://github.com",
          native: false,
          decked: true
        },
        {
          name: "Twitter",
          icon: "twitter.png",
          launch: "https://twitter.com",
          native: false,
          decked: true
        },
        {
          name: "Linkedin",
          icon: "linkedin.png",
          launch: "https://linkedin.com",
          native: false,
          decked: true
        },
        {
          name: "About",
          icon: "about.png",
          launch: "/about",
          native: true,
          decked: false
        },
        {
          name: "Contact",
          icon: "contact.png",
          launch: "/contact",
          native: true,
          decked: false
        },
        {
          name: "Portfolio",
          icon: "portfolio.png",
          launch: "/porfolio",
          native: true,
          decked: false
        },
        {
          name: "Settings",
          icon: "settings.png",
          launch: "/settings",
          native: true,
          decked: false
        }
      ]
    };
  },
  computed: {
    deckedApps: function() {
      return this.apps.filter(a => {
        return a.decked;
      });
    },
    undeckedApps: function() {
      return this.apps.filter(a => {
        return !a.decked;
      });
    }
  }
};
</script>
<style>
@import url("../assets/css/style.css");
</style>
