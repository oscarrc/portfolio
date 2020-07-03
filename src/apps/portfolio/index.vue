<template>
  <v-card tile id="app-card">
    <bar
      :name="app.name"
      :color="app.color"
      :actions="app.actions"
      @Filter="filter = !filter"
    ></bar>
    <navigation
      :color="app.color"
      :sections="app.sections || []"
      :status="drawer"
      :active="section"
    >
    </navigation>
    <wrapper>
      <v-expand-transition>
        <v-card
          class="d-flex justify-space-around flex-wrap mt-md-n4 px-4"
          tile
          v-if="filter"
          min-width="100%"
        >
          <v-checkbox
            v-for="f in filterOptions"
            :key="f"
            v-model="filters"
            :color="app.color"
            :label="f"
            :value="f"
          ></v-checkbox>
        </v-card>
      </v-expand-transition>
      <v-col
        cols="12"
        md="4"
        xl="3"
        v-for="(p, index) in filteredProjects"
        :key="index"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card color="grey lighten-4" class="mx-4">
            <v-img :aspect-ratio="16 / 9" :src="p.image">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="card-overlay d-flex transition-fast-in-fast-out darken-2 display-3 white--text"
                  :class="app.color"
                  style="height: 100%;"
                >
                  <a :href="p.url" target="_BLANK" class="white--text">
                    <v-icon dark class="pb-2">mdi-open-in-new</v-icon> Visit
                  </a>
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text class="pt-6" style="position: relative;">
              <v-btn
                absolute
                :color="app.color"
                class="white--text"
                fab
                large
                right
                top
                :href="p.repo || p.url"
                target="_BLANK"
              >
                <v-icon>{{ p.repo ? "mdi-github" : "mdi-link" }}</v-icon>
              </v-btn>
              <h3
                :class="app.color + '--text'"
                class="display-1 font-weight-light mb-2"
              >
                {{ p.name }}
              </h3>
              <div class="font-weight-light title mb-2">
                {{ p.description }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-chip-group
                v-model="filters"
                :active-class="app.color + '--text text--accent-4'"
                multiple
              >
                <v-chip v-for="t in p.tech" :key="t" :value="t">
                  {{ t }}
                </v-chip>
              </v-chip-group>
            </v-card-actions>
          </v-card>
        </v-hover>
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
  name: "Portfolio",
  components: {
    bar,
    navigation,
    wrapper
  },
  data() {
    return {
      app: require("./config").default,
      loading: false,
      projects: this.getProjects(),
      filter: false,
      filters: []
    };
  },
  computed: {
    ...mapState(["drawer", "section"]),
    filterOptions() {
      return this.app.projects
        .map(p => p.technologies)
        .reduce((prev, cur) => prev.concat(cur), [])
        .filter((item, i, arr) => arr.indexOf(item) === i);
    },
    filteredProjects() {
      let filtered = this.projects.filter(
        p =>
          this.section == 0 ||
          p.field.includes(this.app.sections[this.section].name)
      );

      return filtered.filter(p =>
        this.filters.every(v => p.technologies.includes(v))
      );
    }
  },
  methods: {
    handleAction() {},
    getProjects() {
      let projects = [];

      this.loading = true;

      fb.portfolioCollection.get().then(docs => {
        docs.forEach(doc => {
          doc = doc.data();
          fb.portfolioStore
            .child(doc.image)
            .getDownloadURL()
            .then(url => {
              doc.image = url;
              projects.push(doc);
            });

          this.loading = false;
        });
      });

      return projects;
    }
  }
};
</script>
