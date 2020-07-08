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
  ]
};
