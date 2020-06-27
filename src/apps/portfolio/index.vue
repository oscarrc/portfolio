<template>
  <v-card tile id="app-card">
    <bar :name="app.name" :color="app.color" :actions="app.actions"></bar>
    <navigation
      :color="app.color"
      :sections="app.sections || []"
      :status="drawer"
      :active="section"
    >
    </navigation>
    <wrapper></wrapper>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import bar from "@/components/bar";
import navigation from "@/components/navigation";
import wrapper from "@/components/wrapper";

export default {
  name: "Portfolio",
  components: {
    bar,
    navigation,
    wrapper
  },
  data() {
    return {
      app: require("./config").default
    };
  },
  computed: {
    ...mapState(["drawer", "section"])
  },
  methods: {
    handleAction() {}
  }
};
</script>
