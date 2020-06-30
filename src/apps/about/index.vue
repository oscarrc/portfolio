<template>
  <v-card tile id="app-card">
    <bar
      :name="app.name"
      :color="app.color"
      :actions="app.actions"
      @Download="download"
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
        <v-card tile>
          <v-img
            height="100%"
            max-height="20vh"
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          >
            <v-row class="fill-height">
              <v-col class="d-flex" align-self="start">
                <v-avatar class="profile" color="grey" size="164" tile>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  ></v-img>
                </v-avatar>
                <v-list-item
                  color="rgba(0, 0, 0, .4)"
                  dark
                  class="align-self-end"
                >
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      Oscar R.C.
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      Web Developer
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
          <v-expansion-panels accordion :value="section">
            <v-expansion-panel>
              <v-expansion-panel-header @click="setSection">
                Personal Profile
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                I'm young and proactive web developer based in Galicia, Spain.
                I'm I'm looking forward to improve my skills and learn from
                others order to make a career on what I love. This is my
                skillset, but, keep in mind I'm still learning:
                <v-divider class="mt-8 mb-4"></v-divider>
                <v-row class="pb-4">
                  <v-col cols="6" class="d-flex flex-column ">
                    <span class="pt-2 subtitle-1">Linux</span>
                    <v-progress-linear
                      value="80"
                      :color="app.color + ' accent-4'"
                    ></v-progress-linear>

                    <span class="pt-2 subtitle-1">Apache</span>
                    <v-progress-linear
                      value="75"
                      :color="app.color + ' accent-4'"
                    ></v-progress-linear>

                    <span class="pt-2 subtitle-1">MySQL</span>
                    <v-progress-linear
                      value="70"
                      :color="app.color + ' accent-3'"
                    ></v-progress-linear>
                    <span class="pt-2 subtitle-1">PHP</span>
                    <v-progress-linear
                      value="70"
                      :color="app.color + ' accent-3'"
                    ></v-progress-linear>
                    <span class="pt-2 subtitle-1">JS ES6</span>
                    <v-progress-linear
                      class="align-self-center"
                      :color="app.color + ' accent-4'"
                      :value="75"
                    ></v-progress-linear>
                    <span class="pt-2 subtitle-1">Java</span>
                    <v-progress-linear
                      class="align-self-center"
                      :color="app.color + ' accent-1'"
                      :value="45"
                    ></v-progress-linear>
                  </v-col>
                  <v-col cols="6" class="d-flex flex-column ">
                    <span class="pt-2 subtitle-1">Mongo</span>
                    <v-progress-linear
                      value="55"
                      :color="app.color + ' accent-2'"
                    ></v-progress-linear>

                    <span class="pt-2 subtitle-1">Express</span>
                    <v-progress-linear
                      :color="app.color + ' accent-4'"
                      :value="75"
                    ></v-progress-linear>

                    <span class="pt-2 subtitle-1">Angular</span>
                    <v-progress-linear
                      class="align-self-center"
                      :color="app.color + ' accent-3'"
                      :value="60"
                    ></v-progress-linear>
                    <span class="pt-2 subtitle-1">NodeJS</span>
                    <v-progress-linear
                      class="align-self-center"
                      :color="app.color + ' accent-3'"
                      :value="70"
                    ></v-progress-linear>
                    <span class="pt-2 subtitle-1">React</span>
                    <v-progress-linear
                      class="align-self-center"
                      :color="app.color + ' accent-2'"
                      :value="50"
                    ></v-progress-linear>
                    <span class="pt-2 subtitle-1">Vue</span>
                    <v-progress-linear
                      class="align-self-center"
                      :color="app.color + ' accent-3'"
                      :value="60"
                    ></v-progress-linear>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Education History
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li>
                    <strong>Web Application Development</strong>
                    <br />
                    Certificate of Higher Education HNC <small>2020</small>
                  </li>
                  <li>
                    <strong>
                      Administration of network computer systems
                    </strong>
                    <br />
                    Certificate of Higher Education HNC <small>2013</small>
                  </li>
                  <li>
                    <strong>Telecomunications and computer systems</strong>
                    <br />
                    Certificate of Higher Education HNC <small>2009</small>
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Work Experience
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-timeline dense>
                  <v-timeline-item fill-dot icon="mdi-code-braces">
                    <div class="py-4">
                      <h2 class="headline font-weight-light mb-4">
                        MOODLE WEB DEVELOPER <br />
                        <small>
                          Academia de Enseñanza Newton SLU (2015 - Present)
                        </small>
                      </h2>
                      <ul>
                        <li>
                          Deplopment an maintenance of a Moodle installation
                        </li>
                        <li>
                          Development of custom Moodle plugins
                        </li>
                      </ul>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item fill-dot icon="mdi-code-tags">
                    <div class="py-4">
                      <h2 class="headline font-weight-light mb-4">
                        WEB DEVELOPER <br />
                        <small>
                          Freelance (2015 - present)
                        </small>
                      </h2>
                      <ul>
                        <li>
                          Design, development and deployment of landing pages
                          and microsites for small local business and
                          asociations
                        </li>
                      </ul>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item fill-dot icon="mdi-server">
                    <div class="py-4">
                      <h2 class="headline font-weight-light mb-4">
                        SYSTEM ADMINISTRATOR <br />
                        <small>
                          Aldan Servicios Jurídicos SL (2013 - 2015)
                        </small>
                      </h2>
                      <ul>
                        <li>
                          Design, sizing, deployment and maintenance of
                          corporate web server
                        </li>
                        <li>
                          Design, develoment and deployment of microsites on our
                          server
                        </li>
                        <li>
                          In page SEO optimization of the business websites
                        </li>
                      </ul>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item fill-dot icon="mdi-router-network">
                    <div class="py-4">
                      <h2 class="headline font-weight-light mb-4">
                        NETWORK INSTALLER <br />
                        <small>Itegal Servicios TIC (2009 - 2010)</small>
                      </h2>
                      <ul>
                        <li>
                          Installation and monitoring of enterprise-level local
                          area networks
                        </li>
                      </ul>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Languages
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="6" class="text-center">
                    <v-progress-circular
                      :rotate="360"
                      :size="100"
                      :width="15"
                      value="100"
                      :color="app.color + ' accent-4'"
                    >
                      Spanish
                    </v-progress-circular>
                    <span class="d-block pt-2">Native speaker</span>
                  </v-col>
                  <v-col cols="6" class="text-center">
                    <v-progress-circular
                      :rotate="360"
                      :size="100"
                      :width="15"
                      value="75"
                      :color="app.color + ' accent-2'"
                    >
                      English
                    </v-progress-circular>
                    <span class="d-block pt-2">
                      Advanced writen, intermediate spoken
                    </span>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </wrapper>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

import bar from "@/components/bar";
import navigation from "@/components/navigation";
import wrapper from "@/components/wrapper";

export default {
  name: "About",
  components: {
    bar,
    navigation,
    wrapper
  },
  data() {
    return {
      open: [0],
      app: require("./config").default
    };
  },
  computed: {
    ...mapState(["drawer", "section"])
  },
  methods: {
    download() {
      this.$store.dispatch("about/getCv");
    },
    setSection() {
      this.$store.commit("setSection", 0);
    }
  }
};
</script>
