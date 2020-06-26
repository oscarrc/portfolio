export default {
  name: "Settings",
  path: "/settings",
  native: true,
  decked: false,
  color: "blue-grey",
  actions: [
    {
      name: "Save",
      icon: "mdi-content-save"
    }
  ],
  sections: [
    {
      name: "General",
      icon: "mdi-monitor"
    },
    {
      name: "Licenses",
      icon: "mdi-license"
    },
    {
      name: "Factory Reset",
      icon: "mdi-undo-variant"
    }
  ]
};
