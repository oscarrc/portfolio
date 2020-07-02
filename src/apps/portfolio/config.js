export default {
  name: "Portfolio",
  path: "/portfolio",
  native: true,
  decked: false,
  database: true,
  storage: true,
  color: "purple",
  actions: [
    {
      name: "Filter",
      icon: "mdi-filter"
    }
  ],
  sections: [
    {
      name: "All",
      icon: "mdi-inbox"
    },
    {
      name: "Backend",
      icon: "mdi-code-braces"
    },
    {
      name: "Frontend",
      icon: "mdi-xml"
    }
  ],
  projects: [
    {
      name: "Portfolio",
      description:
        "The portfolio you're seeing right now. It's made in Vue and it tries to resemble a mobile device UI",
      technologies: ["Vue", "Vuetify", "Firebase"],
      field: "Frontend",
      repo: "",
      url: ""
    },
    {
      name: "Portfolio",
      description:
        "The portfolio you're seeing right now. It's made in Vue and it tries to resemble a mobile device UI",
      technologies: ["Vue", "Vuetify", "Firebase"],
      repo: "",
      field: "Backend",
      url: ""
    }
  ]
};
