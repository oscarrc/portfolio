<template>
  <v-col cols="3" class="d-flex justify-center text-center" @click="clicked">
    <v-sheet class="icon" color="transparent">
      <v-badge
        :value="notifications ? notifications : 0"
        content="1"
        color="red"
        overlap
      >
        <v-img
          contain
          class="mb-4 pa-1"
          :src="require(`@/apps${app.icon}`)"
        ></v-img>
      </v-badge>
      <span v-if="!app.decked" class="text-white" dark>{{
        app.name[language]
      }}</span>
    </v-sheet>
  </v-col>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "icon",
  props: {
    app: {
      icon: {
        type: String,
        required: true
      },
      name: {
        type: Object,
        required: true
      },
      launch: {
        type: String,
        required: true
      },
      native: {
        type: Boolean,
        required: true
      },
      decked: {
        type: Boolean,
        required: true
      },
      color: {
        type: String,
        required: true
      }
    }
  },
  computed: {
    ...mapState("settings", ["background", "language"]),
    notifications() {
      return this.$store.getters[
        this.app.name.en_US.toLowerCase() + "/notifications"
      ];
    }
  },
  methods: {
    clicked() {
      this.$emit("click", this.app);
    }
  }
};
</script>
