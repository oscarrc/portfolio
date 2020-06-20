<template>
  <v-app-bar
    id="app-bar"
    class="py-3"
    height="80px"
    absolute
    elevate-on-scroll
    scroll-target="#app-wrapper"
    :color="color + ' accent-4'"
    dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>{{ name }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <slot></slot>
  </v-app-bar>
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
    actions: [
      {
        name: {
          type: String,
          required: true
        },
        icon: {
          type: String,
          required: true
        }
      }
    ]
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
