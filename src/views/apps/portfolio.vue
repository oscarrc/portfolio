<template>
  <v-card tile id="app-card">
    <bar name="About" color="red" action="Download" @clicked="handleAction" />
    <navigation />
    <wrapper></wrapper>
  </v-card>
</template>

<script>
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
  methods: {
    handleAction() {}
  }
};
</script>
