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

import notifications from "@/components/notifications";
import deck from "@/components/deck";
import display from "@/components/display";
import icon from "@/components/icon";

export default {
  name: "Main",
  components: {
    notifications,
    display,
    deck,
    icon
  },
  computed: {
    ...mapState("apps", ["list", "launched"])
  },
  methods: {
    launchApp(app) {
      if (app.native) {
        this.$router.push(app.path);
      } else {
        window.open(app.path, "_blank");
      }
    },
    getApps(decked) {
      return this.list.filter(a => {
        return a.decked == decked;
      });
    },
    closeApp() {
      this.$router.push("/");
    }
  }
};
</script>
