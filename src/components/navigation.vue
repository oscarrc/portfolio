<template>
  <v-navigation-drawer id="app-navigation" :value="status" persistent app>
    <slot></slot>
    <v-list nav dense>
      <v-list-item-group
        mandatory
        :value="active"
        :active-class="color + '--text text--accent-4'"
      >
        <v-list-item
          v-for="(section, index) in sections"
          :key="section.name"
          @click="setActive(index)"
        >
          <v-list-item-icon>
            <v-icon>{{ section.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ section.name }}</v-list-item-title>
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
    },
    status: {
      type: Boolean,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  methods: {
    setActive(index) {
      this.$store.commit("setSection", index, { root: true });
      this.$emit("navigate", index);
    }
  }
};
</script>
