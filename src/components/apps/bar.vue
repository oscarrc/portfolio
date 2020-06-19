<template>
  <v-toolbar
    id="bar"
    width="100%"
    height="auto"
    class="pt-6"
    dark
    :color="color"
  >
    <v-btn icon dark @click="close">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-toolbar-title>{{ name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="action" class="action">
      <v-btn dark text @click="clicked">{{ action }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "bar",
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: false
    }
  },
  methods: {
    close() {
      this.$router.push("/");
      this.$store.commit("toggleApp");
    },
    clicked() {
      this.$emit("clicked");
    }
  }
};
</script>
