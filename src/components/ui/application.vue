<template>
  <v-dialog fullscreen :value="isOpen">
    <router-view></router-view>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "application",
  computed: {
    ...mapState(["isOpen", "isNative", "launchCommand"])
  },
  props: {}
};
</script>
