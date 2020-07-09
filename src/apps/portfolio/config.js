export default {
  name: {
    en_US: "Portfolio",
    es_ES: "Portfolio",
    es_GL: "Portfolio"
  },
  path: "/portfolio",
  native: true,
  decked: false,
  database: true,
  storage: true,
  color: "purple",
  actions: [
    {
      name: {
        en_US: "Filter",
        es_ES: "Filtrar",
        es_GL: "Filtrar"
      },
      icon: "mdi-filter"
    }
  ],
  sections: [
    {
      name: {
        en_US: "All",
        es_ES: "Todos",
        es_GL: "Todos"
      },
      icon: "mdi-inbox"
    },
    {
      name: {
        en_US: "Backend",
        es_ES: "Backend",
        es_GL: "Backend"
      },
      icon: "mdi-code-braces"
    },
    {
      name: {
        en_US: "Frontend",
        es_ES: "Frontend",
        es_GL: "Frontend"
      },
      icon: "mdi-xml"
    }
  ],
  strings: {
    en_US: {
      visit: "Visit"
    },
    es_ES: {
      visit: "Visitar"
    },
    es_GL: {
      visit: "Visitar"
    }
  }
};
