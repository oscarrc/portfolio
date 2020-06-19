<template>
  <v-card tile class="app">
    <bar
      name="Contact"
      color="light-green accent-4"
      action="Send"
      @clicked="handleAction"
    />
    <v-container fill-height class="app-wrapper pa-0 pb-10">
      <v-row class="justify-space-around app-row ma-0">
        <v-col cols="12" md="8" xl="10" class="px-0">
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
            <v-card-title
              class="d-none d-md-block py-1 subtitle-1 grey darken-3 text-white"
            >
              New Message
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
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import bar from "@/components/apps/bar";

export default {
  name: "About",
  data() {
    return {
      from: "",
      to: "oscarrc.web@gmail.com",
      subject: "",
      message: ""
    };
  },
  components: {
    bar
  },
  methods: {
    handleAction() {}
  }
};
</script>
