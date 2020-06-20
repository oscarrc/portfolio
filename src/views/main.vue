<template>
  <v-app>
    <notifications></notifications>
    <v-main class="pa-0">
      <display>
        <icon
          v-for="(app, index) in getApps(false)"
          :key="index"
          :app="app"
          @click="launchApp"
        />
      </display>
      <application :launched="launched">
        <router-view></router-view>
      </application>
    </v-main>
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
  computed: {
    ...mapState(["apps", "launched"])
  },
  methods: {
    launchApp(app) {
      if (app.native) {
        this.$router.push(app.launch);
      } else {
        window.open(app.launch, "_blank");
      }
    },
    getApps: function(decked) {
      return this.apps.filter(a => {
        return a.decked == decked;
      });
    }
  }
};
</script>
