<template>
  <v-dialog id="app" fullscreen v-model="isOpen">
    <slot></slot>
  </v-dialog>
</template>

<script>
export default {
  name: "application",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
};
</script>
