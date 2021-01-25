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
            <box
              :box="inbox"
              name="inbox"
              :strings="app.strings[language]"
              :language="language"
              :avatar="avatar"
              @compose="compose = !compose"
              @removed="saveData"
              @read="saveData"
            />
            <box
              :box="sent"
              name="sent"
              :strings="app.strings[language]"
              :language="language"
              :avatar="avatar"
              @compose="compose = !compose"
              @removed="saveData"
              @read="saveData"
            />
            <box
              :box="trash"
              :strings="app.strings[language]"
              :language="language"
              :avatar="avatar"
              name="trash"
              @compose="compose = !compose"
              @removed="saveData"
              @read="saveData"
            />
          </v-tabs-items>
        </v-tabs>
      </v-col>
    </wrapper>
    <v-dialog
      max-width="80vw"
      :value="compose"
      hide-overlay
      @click:outside="compose = !compose"
      @keydown="closeEsc"
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
          {{ app.strings[language].new }}
          <v-btn icon x-small dark class="ml-auto" @click="compose = !compose">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form ref="mailForm" v-model="valid">
            <v-text-field
              v-model="from"
              single-line
              :rules="rules.from"
              required
            >
              <template v-slot:prepend-inner>
                <v-subheader class="subtitle-1 pa-0"
                  >{{ app.strings[language].from }}:
                </v-subheader>
              </template>
            </v-text-field>
            <v-text-field readonly single-line>
              <template v-slot:prepend-inner>
                <v-subheader class="subtitle-1 pa-0"
                  >{{ app.strings[language].to }}:
                </v-subheader>
                <v-chip class="ma-2" color="indigo" text-color="white">
                  <v-avatar left>
                    <v-img :src="avatar"></v-img>
                  </v-avatar>
                  Oscar R.C.
                </v-chip>
              </template>
            </v-text-field>
            <v-text-field
              :label="app.strings[language].subject"
              :rules="rules.subject"
              v-model="subject"
              single-line
              required
            ></v-text-field>
            <v-textarea
              v-model="message"
              :rules="rules.message"
              counter
              single-line
              required
              :label="app.strings[language].message"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions class="px-6 pb-6">
          <v-spacer></v-spacer>
          <v-btn :color="app.color" dark @click="sendMessage">
            <v-icon class="pr-2">mdi-send</v-icon>
            {{ app.strings[language].send }}
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
      from: "",
      subject: "",
      message: "",
      avatar: "img/avatar.png",
      compose: false,
      loading: false,
      valid: false,
      app: require("./config").default,
      rules: {
        from: [
          v => !!v || this.app.strings[this.language].no_email,
          v => /.+@.+\..+/.test(v) || this.app.strings[this.language].bad_email
        ],
        subject: [v => !!v || this.app.strings[this.language].no_subject],
        message: [v => !!v || this.app.strings[this.language].no_message]
      }
    };
  },
  computed: {
    ...mapState(["drawer", "section"]),
    ...mapState("contact", ["inbox", "sent", "trash"]),
    ...mapState("settings", ["privacy", "language"])
  },
  methods: {
    sendMessage() {
      if (this.valid) {
        const message = {
          from: this.from,
          subject: this.subject,
          message: this.message
        };

        this.loading = true;

        this.$store.dispatch("contact/sendMail", message).then(() => {
          setTimeout(() => {
            this.$refs.mailForm.reset();
            this.$store.commit("contact/mailSent", message);
            this.compose = false;
            this.loading = false;
          }, 2000);

          setTimeout(() => {
            this.$store.dispatch("contact/receiveMail");
          }, 5000);

          this.saveData();
        });
      }
    },
    closeEsc(key) {
      if (key.code == "Escape") {
        this.closeApp();
      }
    },
    saveData() {
      if (this.privacy) {
        localStorage.setItem("inbox", JSON.stringify(this.inbox));
        localStorage.setItem("sent", JSON.stringify(this.sent));
        localStorage.setItem("trash", JSON.stringify(this.trash));
      }
    }
  }
};
</script>
