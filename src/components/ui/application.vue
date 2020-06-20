<template>
  <v-dialog id="app" fullscreen :value="launched">
    <slot></slot>
  </v-dialog>
</template>

<script>
export default {
  name: "application",
  props: {
    launched: {
      type: Boolean,
      required: true
    }
  }
};
</script>
