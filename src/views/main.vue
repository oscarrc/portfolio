<template>
  <v-app>
    <notifications></notifications>
    <v-main class="pa-0">
      <v-window class="fullscreen">
        <v-window-item class="fullscreen">
          <display>
            <icon
              v-for="(app, index) in getApps(false)"
              :key="index"
              :app="app"
              @click="launchApp"
            />
          </display>
        </v-window-item>
      </v-window>
    </v-main>
    <v-dialog
      id="app"
      fullscreen
      :value="launched"
      @click:outside="closeApp"
      @keydown="closeApp"
    >
      <router-view></router-view>
    </v-dialog>
    <deck>
      <icon
        v-for="(app, index) in getApps(true)"
        :key="index"
        :app="app"
        @click="launchApp"
      />
    </deck>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

import notifications from "@/components/ui/notifications";
import deck from "@/components/ui/deck";
import display from "@/components/ui/display";
import icon from "@/components/ui/icon";

export default {
  name: "Main",
  components: {
    notifications,
    display,
    deck,
    icon
  },
  computed: {
    ...mapState("apps", ["apps", "launched"])
  },
  methods: {
    launchApp(app) {
      if (app.native) {
        this.$router.push(app.launch);
      } else {
        window.open(app.launch, "_blank");
      }
    },
    getApps(decked) {
      return this.apps.filter(a => {
        return a.decked == decked;
      });
    },
    closeApp() {
      this.$router.push("/");
    }
  },
  created() {
    this.$store.dispatch("apps/getApps", null, { root: true });
  }
};
</script>
