<template>
  <v-main id="app-wrapper">
    <v-container fluid class="pa-0 pb-10 justify-center">
      <v-row class="justify-space-around ma-0">
        <slot></slot>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "wrapper"
};
</script>
