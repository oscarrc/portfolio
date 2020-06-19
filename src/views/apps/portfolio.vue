<template>
  <v-card tile class="app">
    <bar
      name="Portfolio"
      color="purple accent-4"
      action="Filter"
      @clicked="handleAction"
    />
  </v-card>
</template>

<script>
import bar from "@/components/apps/bar";

export default {
  name: "Portfolio",
  components: {
    bar
  },
  methods: {
    handleAction() {}
  }
};
</script>
