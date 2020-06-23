<template>
  <v-col cols="3" class="d-flex justify-center text-center" @click="clicked">
    <v-sheet class="icon" color="transparent">
      <v-badge v-model="notifications" content="1" color="red" overlap>
        <v-img contain class="mb-4 pa-1" :src="app.icon"></v-img>
      </v-badge>
      <span v-if="!app.decked" class="text-white" dark>{{ app.name }}</span>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "icon",
  data() {
    return {
      notifications: false
    };
  },
  props: {
    app: {
      icon: {
        type: String,
        required: true
      },
      name: {
        type: String,
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
  methods: {
    clicked() {
      this.$emit("click", this.app);
    }
  }
};
</script>
