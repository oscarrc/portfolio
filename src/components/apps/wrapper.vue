<template>
  <v-content id="app-wrapper">
    <v-container fluid class="pa-0 pb-10 justify-center">
      <v-row class="justify-space-around ma-0">
        <slot></slot>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "wrapper"
};
</script>
