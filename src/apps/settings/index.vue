<template>
  <v-card tile id="app-card">
    <bar
      :name="name"
      :color="color"
      :actions="actions"
      :loading="loading"
      @Save="save"
    ></bar>
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
          <v-tabs-items eager vertical v-model="section">
            <v-tab-item
              transition="fade-transition"
              reverse-transition="fade-transition"
            >
              <v-card
                :flat="
                  this.$vuetify.breakpoint.name == 'sm' ||
                    this.$vuetify.breakpoint.name == 'xs'
                "
              >
                <v-card-title>
                  General Settings
                </v-card-title>
                <v-card-subtitle class="pt-4 pb-0">Dark theme</v-card-subtitle>
                <v-switch
                  class="px-4"
                  inset
                  v-model="values.dark"
                  label="Enable dark theme"
                ></v-switch>
                <v-divider></v-divider>
                <v-card-subtitle class="pt-4 pb-0">
                  Background Image
                </v-card-subtitle>
                <v-file-input
                  @change="handleImage"
                  :placeholder="values.background.name"
                  accept="image/*"
                  class="px-4"
                  prepend-icon="mdi-file-image"
                ></v-file-input>
                <v-divider></v-divider>
                <v-card-subtitle class="pt-4 pb-0">Language</v-card-subtitle>
                <v-select
                  v-model="values.language"
                  class="px-4"
                  :items="languages"
                  prepend-icon="mdi-translate"
                ></v-select>
                <v-divider></v-divider>
                <v-card-subtitle class="pt-4 pb-0">Privacy</v-card-subtitle>
                <v-switch
                  class="px-4"
                  inset
                  label="Persistent settings"
                  v-model="values.privacy"
                ></v-switch>
              </v-card>
            </v-tab-item>
            <v-tab-item
              transition="fade-transition"
              reverse-transition="fade-transition"
            >
              <v-card
                :flat="
                  this.$vuetify.breakpoint.name == 'sm' ||
                    this.$vuetify.breakpoint.name == 'xs'
                "
              >
                <v-card-title>
                  License information
                </v-card-title>
                <v-card-subtitle class="pt-4">
                  Oscar R.C.
                </v-card-subtitle>
                <div class="px-4 py-4 body-2">
                  <p>
                    Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                    International
                  </p>
                  <p>
                    (CC) 2020-present, Oscar R.C.
                  </p>
                  <p>
                    You are free to share, copy and redistribute the material in
                    any medium or format; adapt, remix, transform, and build
                    upon the material under the following terms:
                  </p>
                  <p>
                    <strong>Attribution</strong> — You must give appropriate
                    credit, provide a link to the license, and indicate if
                    changes were made. You may do so in any reasonable manner,
                    but not in any way that suggests the licensor endorses you
                    or your use.
                  </p>
                  <p>
                    <strong>NonCommercial</strong> — You may not use the
                    material for commercial purposes.
                  </p>
                  <p>
                    <strong>ShareAlike</strong> — If you remix, transform, or
                    build upon the material, you must distribute your
                    contributions under the same license as the original.
                  </p>
                  <p>
                    <strong>No additional restrictions</strong> — You may not
                    apply legal terms or technological measures that legally
                    restrict others from doing anything the license permits.
                  </p>
                  <p>
                    You do not have to comply with the license for elements of
                    the material in the public domain or where your use is
                    permitted by an applicable exception or limitation.
                  </p>
                  <p>
                    No warranties are given. The license may not give you all of
                    the permissions necessary for your intended use. For
                    example, other rights such as publicity, privacy, or moral
                    rights may limit how you use the material.
                  </p>
                </div>
                <v-divider></v-divider>
                <v-card-subtitle class="pt-4">
                  Vue
                </v-card-subtitle>
                <div class="px-4 py-4 body-2">
                  <p>
                    The MIT License (MIT)
                  </p>
                  <p>
                    Copyright (c) 2013-present, Yuxi (Evan) You
                  </p>
                  <p>
                    Permission is hereby granted, free of charge, to any person
                    obtaining a copy of this software and associated
                    documentation files (the "Software"), to deal in the
                    Software without restriction, including without limitation
                    the rights to use, copy, modify, merge, publish, distribute,
                    sublicense, and/or sell copies of the Software, and to
                    permit persons to whom the Software is furnished to do so,
                    subject to the following conditions:
                  </p>
                  <p>
                    The above copyright notice and this permission notice shall
                    be included in all copies or substantial portions of the
                    Software.
                  </p>
                  <p>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                    KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
                    OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </p>
                </div>
                <v-divider></v-divider>
                <v-card-subtitle class="pt-4">
                  Vuex
                </v-card-subtitle>
                <div class="px-4 py-4 body-2">
                  <p>
                    The MIT License (MIT)
                  </p>
                  <p>
                    Copyright (c) 2015-present, Evan You
                  </p>
                  <p>
                    Permission is hereby granted, free of charge, to any person
                    obtaining a copy of this software and associated
                    documentation files (the "Software"), to deal in the
                    Software without restriction, including without limitation
                    the rights to use, copy, modify, merge, publish, distribute,
                    sublicense, and/or sell copies of the Software, and to
                    permit persons to whom the Software is furnished to do so,
                    subject to the following conditions:
                  </p>
                  <p>
                    The above copyright notice and this permission notice shall
                    be included in all copies or substantial portions of the
                    Software.
                  </p>
                  <p>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                    KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
                    OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </p>
                </div>
                <v-divider></v-divider>
                <v-card-subtitle class="pt-4">
                  Vuetify
                </v-card-subtitle>
                <div class="px-4 py-4 body-2">
                  <p>
                    The MIT License (MIT)
                  </p>
                  <p>
                    Copyright (c) 2016-2020 John Jeremy Leider
                  </p>
                  <p>
                    Permission is hereby granted, free of charge, to any person
                    obtaining a copy of this software and associated
                    documentation files (the "Software"), to deal in the
                    Software without restriction, including without limitation
                    the rights to use, copy, modify, merge, publish, distribute,
                    sublicense, and/or sell copies of the Software, and to
                    permit persons to whom the Software is furnished to do so,
                    subject to the following conditions:
                  </p>
                  <p>
                    The above copyright notice and this permission notice shall
                    be included in all copies or substantial portions of the
                    Software.
                  </p>
                  <p>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                    KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
                    OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </p>
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item
              transition="fade-transition"
              reverse-transition="fade-transition"
            >
              <v-card
                :flat="
                  this.$vuetify.breakpoint.name == 'sm' ||
                    this.$vuetify.breakpoint.name == 'xs'
                "
              >
                <v-card-title>
                  Factory Reset
                </v-card-title>
                <v-card-text>
                  By clicking the following button you'll resetting this app to
                  its initial state. <strong>¿Are you sure?</strong>
                </v-card-text>
                <v-card-actions class="pa-4">
                  <v-btn color="error" @click="reset" :loading="loading">
                    Reset to defaults
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
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
  name: "Settings",
  components: {
    bar,
    navigation,
    wrapper
  },
  computed: {
    ...mapState(["drawer", "section"]),
    ...mapState("settings", [
      "name",
      "color",
      "actions",
      "sections",
      "dark",
      "background",
      "language",
      "privacy",
      "loading"
    ]),
    values() {
      return {
        dark: this.dark,
        background: {
          name: this.background.name,
          image: this.background.image
        },
        language: this.language,
        privacy: this.privacy
      };
    }
  },
  data() {
    return {
      languages: [
        {
          text: "English",
          value: "en_US"
        },
        {
          text: "Español",
          value: "es_ES"
        },
        {
          text: "Galego",
          value: "es_GL"
        }
      ],
      isLoading: false
    };
  },
  methods: {
    save() {
      this.$store.dispatch("settings/saveSettings", {
        dark: this.values.dark,
        background: {
          name: this.values.background.name,
          image: this.values.background.image
        },
        language: this.values.language,
        privacy: this.values.privacy
      });
    },
    handleImage(e) {
      if (e) {
        const reader = new FileReader();

        this.values.background.name = e.name;

        reader.onloadend = e => {
          this.values.background.image = e.target.result;
        };

        reader.readAsDataURL(e);
      } else {
        this.values.background.name = "default";
        this.values.background.image = "/img/bg.jpg";
      }
    },
    reset() {
      this.$store.dispatch("settings/resetSettings");
    }
  }
};
</script>
