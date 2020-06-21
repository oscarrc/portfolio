<template>
  <v-card tile id="app-card">
    <bar :name="app.name" :color="app.color" :actions="app.actions"></bar>
    <navigation
      :color="app.color"
      :sections="app.sections || []"
      :status="drawer"
    >
    </navigation>
    <wrapper></wrapper>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import bar from "@/components/apps/bar";
import navigation from "@/components/apps/navigation";
import wrapper from "@/components/apps/wrapper";

export default {
  name: "Settings",
  components: {
    bar,
    navigation,
    wrapper
  },
  computed: {
    ...mapState(["app", "drawer"])
  },
  methods: {
    handleAction() {}
  }
};
</script>
