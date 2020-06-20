<template>
  <v-card tile id="app-card">
    <bar name="About" color="red" action="Download" @clicked="handleAction" />
    <navigation />
    <wrapper>
      <v-col cols="12" md="4" class="px-0">
        <v-card class="mx-auto" tile>
          <v-img
            height="100%"
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          >
            <v-row align="end" class="fill-height">
              <v-col align-self="start" cols="12">
                <v-avatar class="profile" color="grey" size="164" tile>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
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
          <v-expansion-panels accordion :value="0">
            <v-expansion-panel>
              <v-expansion-panel-header>
                Personal Profile
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                I'm young and proactive web developer based in Galicia, Spain.
                I'm I'm looking forward to improve my skills and learn from
                others order to make a career on what I love.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Areas of Expertise
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li>HTML 5, CSS3 and Javascript</li>
                  <li>LAMP Stack (Linux, Apache, Mysql and PHP)</li>
                  <li>MEAN Stack (Mongo, Express, Angular and Node)</li>
                </ul>
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
                Other Skills
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li>Basic knowledge of React and Vue frameworks</li>
                  <li>
                    Basic knowledge of JAVA and C# programming languages
                  </li>
                  <li>Linux server administration</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Languages
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li>Native Spanish speaker</li>
                  <li>Advanced written and intermediate spoken English</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col cols="12" md="7" class="px-0">
        <v-card tile elevation="2">
          <v-expansion-panels accordion :value="0">
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
          </v-expansion-panels>
        </v-card>
      </v-col>
    </wrapper>
  </v-card>
</template>

<script>
import bar from "@/components/apps/bar";
import navigation from "@/components/apps/navigation";
import wrapper from "@/components/apps/wrapper";

export default {
  name: "About",
  components: {
    bar,
    navigation,
    wrapper
  },
  data() {
    return {
      open: [0]
    };
  },
  methods: {
    handleAction() {
      window.open("/docs/Oscar R.C. C.V..pdf");
    }
  }
};
</script>
