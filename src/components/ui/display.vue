<template>
  <v-container id="screen" fluid class="pt-10 pb-10 align-start" fill-height>
    <v-row class="justify-space-around align-start mt-10">
      <icon v-for="(app, index) in apps" :key="index" :app="app" />
    </v-row>
  </v-container>
</template>

<script>
import icon from "@/components/shared/icon";

export default {
  name: "display",
  components: {
    icon
  },
  props: {
    apps: {
      type: Array,
      required: true
    }
  }
};
</script>
