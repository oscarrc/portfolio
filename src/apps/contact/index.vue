<template>
  <v-card tile id="app-card">
    <bar :name="name" :color="color" @Compose="toggleCompose"></bar>
    <navigation
      :color="color"
      :sections="sections || []"
      :status="drawer"
      :active="section"
    >
    </navigation>
    <wrapper>
      <v-col cols="12" md="8" class="px-0 mx-auto">
        <v-tabs v-model="section">
          <v-tabs-items eager v-model="section">
            <box :box="inbox" @compose="toggleCompose" @remove="remove" />
            <box :box="sent" @compose="toggleCompose" @remove="remove" />
            <box :box="trash" @compose="toggleCompose" @remove="remove" />
          </v-tabs-items>
        </v-tabs>
      </v-col>
    </wrapper>
    <v-dialog
      max-width="80vw"
      :value="compose"
      hide-overlay
      @click:outside="toggleCompose"
      @keydown="toggleCompose"
    >
      <v-card
        :loading="loading ? color : loading"
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
          <v-btn icon x-small dark class="ml-auto" @click="toggleCompose">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form ref="mailForm">
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
        <v-card-actions class="px-6 pb-6">
          <v-spacer></v-spacer>
          <v-btn :color="color" dark @click="send">
            <v-icon class="pr-2">mdi-send</v-icon> Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-fab-transition>
      <v-btn
        v-show="!compose"
        :color="color"
        dark
        absolute
        bottom
        right
        fab
        class="fab-button"
        @click="toggleCompose"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import bar from "@/components/bar";
import navigation from "@/components/navigation";
import wrapper from "@/components/wrapper";
import box from "./box";

export default {
  name: "Contact",
  components: {
    bar,
    navigation,
    wrapper,
    box
  },
  computed: {
    ...mapState(["drawer", "section"]),
    ...mapState("contact", [
      "name",
      "color",
      "sections",
      "actions",
      "inbox",
      "sent",
      "trash",
      "compose",
      "loading"
    ])
  },
  data() {
    return {
      from: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    send() {
      this.$store
        .dispatch("contact/sendMail", {
          from: this.from,
          subject: this.subject,
          message: this.message
        })
        .then(() => {
          this.$refs.mailForm.reset();
        });
    },
    remove(message) {
      this.$store.commit("contact/moveToTrash", message, { root: true });
    },
    toggleCompose(e) {
      if (!e || !e.key || (e && e.key == "Escape")) {
        this.$store.commit("contact/toggleCompose");
      }
    }
  }
};
</script>
