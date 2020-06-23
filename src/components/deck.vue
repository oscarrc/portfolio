<template>
  <v-footer id="deck" fixed rounded elevation="2" color="transparent">
    <v-card width="100%" color="rgba(255, 255, 255, 0.2)" class="text-center">
      <v-container fluid class="deckedApps">
        <v-row class="justify-space-around align-start">
          <slot></slot>
        </v-row>
      </v-container>
      <v-divider class="mt-15"></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — Made with
        <v-icon small dark>mdi-vuejs</v-icon>,
        <v-icon small dark>mdi-vuetify</v-icon>,
        <v-icon small dark>mdi-firebase</v-icon>, and
        <v-icon small dark>mdi-heart</v-icon>
        by Oscar R.C.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "deck"
};
</script>
