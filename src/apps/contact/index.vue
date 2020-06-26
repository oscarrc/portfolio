/* eslint-disable prettier/prettier */
<template>
  <v-card tile id="app-card">
    <bar
      :name="app.name"
      :color="app.color"
      :actions="app.actions"
      @Compose="compose = true"
    ></bar>
    <navigation
      :color="app.color"
      :sections="app.sections || []"
      :status="drawer"
      :active="section"
    >
    </navigation>
    <wrapper>
      <v-col cols="12" md="8" class="px-0">
        <v-tabs v-model="section">
          <v-tabs-items eager vertical v-model="section">
            <v-tab-item
              transition="fade-transition"
              reverse-transition="fade-transition"
            >
              <v-list
                v-if="app.inbox.length > 0"
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
                  v-for="(email, index) in app.inbox"
                  :key="index"
                  @click="email.read = true"
                >
                  <v-list-item
                    slot="activator"
                    class="menu-item px-0"
                    :key="index"
                    disabled
                  >
                    <v-list-item-avatar>
                      <v-img :src="email.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        :class="!email.read ? 'font-weight-black' : ''"
                      >
                        {{ email.subject }}
                      </v-list-item-title>
                      <v-list-item-subtitle
                        :class="!email.read ? 'font-weight-black' : ''"
                      >
                        From: {{ email.from }}
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
                    <v-btn icon class="pr-2" @click="compose = true">
                      <v-icon>mdi-reply</v-icon>
                    </v-btn>
                    <v-btn icon><v-icon>mdi-delete</v-icon></v-btn>
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
          </v-tabs-items>
        </v-tabs>
      </v-col>
    </wrapper>
    <v-dialog max-width="80vw" v-model="compose" hide-overlay>
      <v-card
        :tile="
          this.$vuetify.breakpoint.name == 'sm' ||
            this.$vuetify.breakpoint.name == 'xs'
        "
        :elevation="
          this.$vuetify.breakpoint.name == 'sm' ||
          this.$vuetify.breakpoint.name == 'xs'
            ? 0
            : 2
        "
      >
        <v-card-title class="d-flex py-1 subtitle-1 grey darken-3 text-white">
          New Message
          <v-btn icon x-small dark class="ml-auto" @click="compose = !compose">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="from" single-line>
              <template v-slot:prepend-inner>
                <v-subheader class="subtitle-1 pa-0">From: </v-subheader>
              </template>
            </v-text-field>
            <v-text-field readonly single-line>
              <template v-slot:prepend-inner>
                <v-subheader class="subtitle-1 pa-0">To: </v-subheader>
                <v-chip class="ma-2" color="indigo" text-color="white">
                  <v-avatar left>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                    ></v-img>
                  </v-avatar>
                  Oscar R.C.
                </v-chip>
              </template>
            </v-text-field>
            <v-text-field
              label="Subject"
              v-model="subject"
              single-line
            ></v-text-field>
            <v-textarea
              v-model="message"
              counter
              single-line
              label="Write an email"
            ></v-textarea>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-fab-transition>
      <v-btn
        v-show="compose"
        color="secondary"
        dark
        absolute
        bottom
        right
        fab
        class="fab-button"
        @click="send"
      >
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import bar from "@/components/bar";
import navigation from "@/components/navigation";
import wrapper from "@/components/wrapper";

export default {
  name: "Contact",
  components: {
    bar,
    navigation,
    wrapper
  },
  computed: {
    ...mapState(["app", "drawer", "section"])
  },
  data() {
    return {
      compose: false,
      from: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    send() {}
  }
};
</script>
