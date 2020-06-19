<template>
  <v-dialog fullscreen :value="isOpen">
    <router-view v-if="isNative"></router-view>
    <iframe v-if="!isNative" style="width:100%" :src="launchCommand"></iframe>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "icon",
  computed: {
    ...mapState(["isOpen", "isNative", "launchCommand"])
  },
  props: {}
};
</script>
