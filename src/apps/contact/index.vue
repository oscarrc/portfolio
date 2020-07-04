<template>
  <v-card tile id="app-card">
    <bar
      :name="app.name"
      :color="app.color"
      @Compose="compose = !compose"
    ></bar>
    <navigation
      :color="app.color"
      :sections="app.sections || []"
      :status="drawer"
      :active="section"
    >
    </navigation>
    <wrapper>
      <v-col cols="12" md="8" class="px-0 mx-auto">
        <v-tabs v-model="section">
          <v-tabs-items eager v-model="section">
            <box :box="inbox" @compose="compose = !compose" @remove="remove" />
            <box :box="sent" @compose="compose = !compose" @remove="remove" />
            <box :box="trash" @compose="compose = !compose" @remove="remove" />
          </v-tabs-items>
        </v-tabs>
      </v-col>
    </wrapper>
    <v-dialog
      max-width="80vw"
      :value="compose"
      hide-overlay
      @click:outside="compose = !compose"
      @keydown="compose = !compose"
    >
      <v-card
        :loading="loading ? app.color : loading"
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
          <v-btn :color="app.color" dark @click="send">
            <v-icon class="pr-2">mdi-send</v-icon> Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-fab-transition>
      <v-btn
        v-show="!compose"
        :color="app.color"
        dark
        absolute
        bottom
        right
        fab
        class="fab-button"
        @click="compose = !compose"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import fb from "@/plugins/firebase";

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
  data() {
    return {
      inbox: [],
      sent: [],
      trash: [],
      from: "",
      subject: "",
      message: "",
      compose: false,
      loading: false,
      app: require("./config").default
    };
  },
  computed: {
    ...mapState(["drawer", "section"])
  },
  methods: {
    getInbox() {
      fb.contactCollection
        .where("box", "==", "inbox")
        .get()
        .then(docs => {
          docs.forEach(doc => {
            this.inbox = doc.data().messages;
          });
        });
    },
    getSent() {
      let sent = [];

      fb.contactCollection
        .where("box", "==", "sent")
        .get()
        .then(docs => {
          docs.forEach(doc => {
            this.sent = doc.data().messages;
          });
        });

      return sent;
    },
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
      this.$store.commit("contact/moveToTrash", message);
    }
  },
  created() {
    this.getInbox();
    this.getSent();
  }
};
</script>
