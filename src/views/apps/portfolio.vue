<template>
  <v-card tile id="app-card">
    <bar
      :name="app.name"
      :color="app.color"
      action="Download"
      @clicked="handleAction"
    />
    <navigation :color="app.color" :sections="app.sections || []" />
    <wrapper></wrapper>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import bar from "@/components/apps/bar";
import navigation from "@/components/apps/navigation";
import wrapper from "@/components/apps/wrapper";

export default {
  name: "Portfolio",
  components: {
    bar,
    navigation,
    wrapper
  },
  computed: {
    ...mapState(["app"])
  },
  methods: {
    handleAction() {}
  }
};
</script>
