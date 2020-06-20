<template>
  <v-navigation-drawer id="app-navigation" persistent app>
    <v-list nav dense>
      <v-list-item-group
        value="true"
        :active-class="color + '--text text--accent-4'"
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navigation",
  props: {
    color: {
      type: String,
      required: true
    },
    sections: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>
