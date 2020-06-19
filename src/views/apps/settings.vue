<template>
  <v-card tile class="app">
    <bar
      name="Settings"
      color="blue-grey darken-3"
      action="Save"
      @clicked="handleAction"
    />
  </v-card>
</template>

<script>
import bar from "@/components/apps/bar";

export default {
  name: "Settings",
  components: {
    bar
  },
  methods: {
    handleAction() {}
  }
};
</script>
