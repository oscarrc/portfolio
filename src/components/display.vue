<template>
  <v-container id="screen" fluid class="pt-10 pb-10 align-start" fill-height>
    <v-row
      v-for="row in rows"
      :key="row"
      class="justify-space-around align-start mt-10"
    >
      <icon v-for="(app, index) in getCol(row)" :key="index" :app="app" />
    </v-row>
  </v-container>
</template>

<script>
import icon from "@/components/icon";

export default {
  name: "display",
  components: {
    icon
  },
  props: {
    apps: {
      type: Array,
      required: true
    }
  },
  computed: {
    rows: function() {
      return Math.ceil(this.apps.length / 4);
    }
  },
  methods: {
    getCol: function(row) {
      return this.apps.slice((row - 1) * 4, 4 * row);
    }
  }
};
</script>
