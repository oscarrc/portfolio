<template>
  <v-col cols="3" class="d-flex justify-center text-center" @click="open">
    <v-sheet class="icon" color="transparent">
      <v-img contain class="mb-4 pa-2" :src="'/img/' + app.icon"></v-img>
      <span v-if="!app.decked" class="text-white" dark>{{ app.name }}</span>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "icon",
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
    open() {
      this.$store.commit("toggleApp", this.app.launch, this.app.native);
    }
  }
};
</script>
