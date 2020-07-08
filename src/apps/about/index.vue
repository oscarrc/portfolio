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
    <wrapper v-if="!loading">
      <v-col cols="12" md="8" class="px-0 py-0 p-sm-auto mx-auto">
        <v-card tile v-for="(item, index) in about" :key="index">
          <v-img
            height="100%"
            aspect-ratio="4"
            max-height="187px"
            :src="background"
          >
            <v-row class="fill-height" align="end">
              <v-col class="d-flex" align-self="start">
                <v-avatar class="profile" color="grey" size="164" tile>
                  <v-img :src="avatar"></v-img>
                </v-avatar>
                <v-list-item
                  color="rgba(0, 0, 0, .4)"
                  dark
                  class="align-self-end"
                >
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      {{ item.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.slogan }}
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
                {{ item.profile }}
                <v-divider class="mt-8 mb-4"></v-divider>
                <v-row class="pb-4">
                  <v-col
                    v-for="(value, skill) in item.skills"
                    :key="skill"
                    cols="6"
                    class="d-flex flex-column "
                  >
                    <span class="pt-2 subtitle-1">{{ skill }}</span>
                    <v-progress-linear
                      :value="value"
                      :color="app.color + ' accent-4'"
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
                <v-timeline dense>
                  <v-timeline-item
                    v-for="education in item.education"
                    :key="education.id"
                    fill-dot
                    :icon="education.icon"
                  >
                    <div class="py-4">
                      <h2 class="headline font-weight-light mb-4">
                        {{ education.name }} <br />
                        <small>
                          {{ education.title }} ({{ education.year }})
                        </small>
                      </h2>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Work Experience
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-timeline dense>
                  <v-timeline-item
                    v-for="experience in item.experience"
                    :key="experience.id"
                    fill-dot
                    :icon="experience.icon"
                  >
                    <div class="py-4">
                      <h2 class="headline font-weight-light mb-4">
                        {{ experience.name }} <br />
                        <small>
                          {{ experience.company }} ({{ experience.start }} -
                          {{ experience.end > 0 ? experience.end : "present" }})
                        </small>
                      </h2>
                      <ul>
                        <li
                          v-for="(task, index) in experience.tasks"
                          :key="index"
                        >
                          {{ task }}
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
                  <v-col
                    v-for="language in item.languages"
                    :key="language.name"
                    cols="6"
                    class="text-center"
                  >
                    <v-progress-circular
                      :rotate="360"
                      :size="100"
                      :width="15"
                      :value="language.level"
                      :color="app.color + ' accent-4'"
                    >
                      {{ language.name }}
                    </v-progress-circular>
                    <span class="d-block pt-2">{{ language.description }}</span>
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
import fb from "@/plugins/firebase";

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
      loading: false,
      about: this.getAboutInfo(),
      avatar: "/img/avatar.png",
      background: "/img/bg.png",
      app: require("./config").default
    };
  },
  computed: {
    ...mapState(["drawer", "section"])
  },
  methods: {
    download() {
      fb.aboutStore
        .child("Oscar R.C. Web Developer.pdf")
        .getDownloadURL()
        .then(url => {
          window.open(url, "_blank");
        });
    },
    getImage(image) {
      return fb.aboutStore.child(image).getDownloadURL();
    },
    getAboutInfo() {
      let about = [];

      this.loading = true;

      fb.aboutCollection.get().then(docs => {
        docs.forEach(doc => {
          about.push(doc.data());
        });
        this.loading = false;
      });

      return about;
    },
    setSection() {
      this.$store.commit("setSection", 0);
    }
  }
};
</script>
