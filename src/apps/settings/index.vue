<template>
  <v-card tile id="app-card">
    <bar :name="app.name" :color="app.color" :actions="app.actions"></bar>
    <navigation
      :color="app.color"
      :sections="app.sections || []"
      :status="drawer"
      :active="section"
    >
    </navigation>
    <wrapper>
      <v-col cols="12" md="8" class="px-0">
        <v-tabs hide-slider v-model="section">
          <v-tabs-items vertical v-model="section">
            <v-tab-item
              transition="fade-transition"
              reverse-transition="fade-transition"
            >
              <v-card>
                <v-card-title>
                  Display settings
                </v-card-title>
                <v-card-subtitle class="pt-4">Dark theme</v-card-subtitle>
                <v-switch
                  class="px-4"
                  inset
                  v-model="settings.dark"
                  :label="settings.dark ? ' Enabled' : ' Disabled'"
                ></v-switch>
                <v-divider></v-divider>
                <v-card-subtitle class="pt-4">Background Image</v-card-subtitle>
                <v-file-input
                  class="px-4"
                  label="Select an image"
                ></v-file-input>
              </v-card>
            </v-tab-item>
            <v-tab-item
              transition="fade-transition"
              reverse-transition="fade-transition"
            >
              <v-card>
                <v-card-title>
                  Language settings
                </v-card-title>
                <v-card-subtitle class="pt-4">
                  Select your language
                </v-card-subtitle>
                <v-radio-group class="px-4">
                  <v-radio label="English" value="EN_us"></v-radio>
                  <v-radio label="Español" value="ES_es"></v-radio>
                  <v-radio label="Galego" value="ES_gl"></v-radio>
                </v-radio-group>
              </v-card>
            </v-tab-item>
            <v-tab-item
              transition="fade-transition"
              reverse-transition="fade-transition"
            >
              <v-card>
                <v-card-title>
                  License information
                </v-card-title>
                <v-card-subtitle class="pt-4">
                  Vue
                </v-card-subtitle>
                <v-card-subtitle class="pt-4">
                  Vuetify
                </v-card-subtitle>
              </v-card>
            </v-tab-item>
            <v-tab-item
              transition="fade-transition"
              reverse-transition="fade-transition"
            >
              <v-card>
                <v-card-title>
                  Factory Reset
                </v-card-title>
                <v-card-text>
                  By clicking the following button you'll resetting this app to
                  its initial state. <strong>¿Are you sure?</strong>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn color="error">Reset to defaults</v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-col>
    </wrapper>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import bar from "@/components/bar";
import navigation from "@/components/navigation";
import wrapper from "@/components/wrapper";

export default {
  name: "Settings",
  components: {
    bar,
    navigation,
    wrapper
  },
  computed: {
    ...mapState("apps", ["app", "drawer", "section"]),
    ...mapState(["settings"])
  },
  methods: {
    handleAction() {}
  }
};
</script>
