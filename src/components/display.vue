<template>
  <v-container id="display" fluid class="py-5 align-start" fill-height>
    <v-row class="justify-space-around align-center mt-10">
      <slot></slot>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "display"
};
</script>
