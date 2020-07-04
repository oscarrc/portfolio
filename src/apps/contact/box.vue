<template>
  <v-tab-item transition="fade-transition" reverse-transition="fade-transition">
    <v-list
      v-if="box.length > 0"
      three-line
      :elevation="
        this.$vuetify.breakpoint.name == 'sm' ||
        this.$vuetify.breakpoint.name == 'xs'
          ? 0
          : 2
      "
    >
      <v-subheader>Today</v-subheader>
      <v-divider></v-divider>
      <v-list-group
        v-model="email.active"
        v-for="(email, index) in box"
        :key="index"
        @click="email.read = true"
      >
        <v-list-item
          slot="activator"
          class="menu-item px-0"
          :key="index"
          disabled
        >
          <v-list-item-avatar color="green accent-4">
            <v-img v-if="avatar" :src="avatar"></v-img>
            <span v-else class="white--text headline">
              {{ email.from.substring(0, 1).toUpperCase() }}
            </span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title :class="!email.read ? 'font-weight-black' : ''">
              {{ email.subject }}
            </v-list-item-title>
            <v-list-item-subtitle
              :class="!email.read ? 'font-weight-black' : ''"
            >
              {{ email.from }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-content
          class="px-8 email-body"
          color="text-light"
          v-html="email.message"
        >
        </v-list-item-content>
        <v-list-item-action class="d-flex flex-row justify-end px-8">
          <v-btn icon class="pr-2" @click="$emit('compose')">
            <v-icon>mdi-reply</v-icon>
          </v-btn>
          <v-btn icon @click="remove(index)"><v-icon>mdi-delete</v-icon></v-btn>
        </v-list-item-action>
      </v-list-group>
    </v-list>
    <v-card
      v-else
      class="pa-5 d-flex justify-center"
      :flat="
        this.$vuetify.breakpoint.name == 'sm' ||
          this.$vuetify.breakpoint.name == 'xs'
      "
    >
      <v-card-title class="h2">
        There are no messages
      </v-card-title>
    </v-card>
  </v-tab-item>
</template>

<script>
export default {
  name: "box",
  props: {
    box: {
      type: Array,
      required: true
    },
    avatar: String
  },
  methods: {
    remove(index) {
      this.$emit("remove", this.box[index]);
      this.box.splice(index, 1);
    }
  }
};
</script>
