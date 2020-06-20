<template>
  <v-app>
    <notifications></notifications>
    <v-main class="pa-0">
      <display>
        <icon
          v-for="(app, index) in undeckedApps"
          :key="index"
          :app="app"
          @click="launchApp"
        />
      </display>
      <application :isOpen="isApp" :app="activeApp">
        <router-view></router-view>
      </application>
    </v-main>
    <deck>
      <icon
        v-for="(app, index) in deckedApps"
        :key="index"
        :app="app"
        @click="launchApp"
      />
    </deck>
  </v-app>
</template>

<script>
import application from "@/components/ui/application";
import notifications from "@/components/ui/notifications";
import deck from "@/components/ui/deck";
import display from "@/components/ui/display";
import icon from "@/components/ui/icon";

export default {
  name: "Main",
  components: {
    application,
    notifications,
    display,
    deck,
    icon
  },
  data() {
    return {
      isOpen: false,
      activeApp: null,
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
          color: "light-blue accent-4"
        },
        {
          name: "Portfolio",
          icon: "portfolio.png",
          launch: "/portfolio",
          native: true,
          decked: false,
          color: "purple accent-4"
        },
        {
          name: "Contact",
          icon: "contact.png",
          launch: "/contact",
          native: true,
          decked: false,
          color: "light-green accent-4"
        },
        {
          name: "Settings",
          icon: "settings.png",
          launch: "/settings",
          native: true,
          decked: false,
          color: "blue-grey darken-3"
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
    },
    isApp: function() {
      return this.$route.meta.app ? true : false;
    }
  },
  methods: {
    launchApp(app) {
      if (app.native) {
        this.activeApp = app;
        this.$router.push(app.launch);
      } else {
        window.open(app.launch, "_blank");
      }
    }
  },
  created() {
    if (this.isApp) {
      this.activeApp = this.apps.find(a => a.name == this.$route.name);
    }
  }
};
</script>
