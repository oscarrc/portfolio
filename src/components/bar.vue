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
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ name[language] }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-if="actions"
      :loading="loading"
      class="ma-2"
      large
      icon
      @click="$emit(actions[0].name.en_US)"
    >
      <v-icon>{{ actions[0].icon }}</v-icon>
    </v-btn>

    <v-menu v-if="moreActions.length > 0">
      <template v-slot:activator="{ on, attrs }">
        <v-btn large icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="action in moreActions"
          :key="action.name[language]"
          ripple
          class="menu-item"
        >
          <v-list-item-title @click="$emit(action.name.en_US)">
            {{ action.name[language] }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "bar",
  props: {
    name: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    actions: {
      type: Array,
      required: false
    },
    loading: {
      type: Boolean
    }
  },
  computed: {
    ...mapState("settings", ["language"]),
    moreActions: function() {
      return this.actions ? this.actions.slice(1, this.actions.length) : [];
    }
  },
  methods: {
    close() {
      this.$router.push("/");
    },
    toggleDrawer() {
      this.$store.commit("toggleDrawer", null, { root: true });
    }
  }
};
</script>
