export default {
  name: "About",
  path: "/about",
  native: true,
  decked: false,
  database: true,
  storage: true,
  color: "blue",
  actions: [
    {
      name: "Download",
      icon: "mdi-download"
    }
  ],
  sections: [
    {
      name: "Profile",
      icon: "mdi-account"
    },
    {
      name: "Education",
      icon: "mdi-school"
    },
    {
      name: "Experience",
      icon: "mdi-briefcase"
    },
    {
      name: "Languages",
      icon: "mdi-web"
    }
  ]
};
