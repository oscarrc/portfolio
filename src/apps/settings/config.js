export default {
  name: {
    en_US: "Settings",
    es_ES: "Ajustes",
    es_GL: "Axustes"
  },
  path: "/settings",
  native: true,
  decked: false,
  color: "blue-grey",
  dark: false,
  language: "en_US",
  privacy: false,
  background: {
    name: "default",
    image: "/img/bg.png"
  },
  actions: [
    {
      name: {
        en_US: "Save",
        es_ES: "Guardar",
        es_GL: "Gardar"
      },
      icon: "mdi-content-save"
    }
  ],
  sections: [
    {
      name: {
        en_US: "General",
        es_ES: "General",
        es_GL: "Xeral"
      },
      icon: "mdi-monitor"
    },
    {
      name: {
        en_US: "Licenses",
        es_ES: "Licencias",
        es_GL: "Licenzas"
      },
      icon: "mdi-license"
    },
    {
      name: {
        en_US: "Factory Reset",
        es_ES: "Restablecer",
        es_GL: "Restablecer"
      },
      icon: "mdi-undo-variant"
    }
  ],
  strings: {
    en_US: {
      general: "General Settings",
      theme: "Dark theme",
      dark: "Enable dark theme",
      background: "Background Image",
      image: "default",
      language: "Language",
      privacy: "Privacy",
      persistent: "Persistent settings",
      license: "License Information",
      reset: "Factory Reset",
      reset_text:
        "By clicking the following button you'll resetting this app to its initial state.",
      reset_button: "Reset to defaults",
      reset_sure: "Are you sure?"
    },
    es_ES: {
      general: "Ajustes Generales",
      theme: "Tema oscuro",
      dark: "Activar tema oscuro",
      background: "Imagen de fondo",
      image: "por defecto",
      language: "Idioma",
      privacy: "Privacidad",
      persistent: "Ajustes persistentes",
      license: "Información de licencia",
      reset: "Restablecer de fábrica",
      reset_text:
        "Al hacer clic en el siguiente botón resetearás la aplicación a su estado inicial.",
      reset_button: "Resetar por defecto",
      reset_sure: "¿Estás seguro?"
    },
    es_GL: {
      general: "Axustes xerais",
      theme: "Tema oscuro",
      dark: "Activar tema oscuro",
      background: "Imaxe de fondo",
      image: "por defecto",
      language: "Lingua",
      privacy: "Privacidade",
      persistent: "Axustes persistentes",
      license: "Información de licenzas",
      reset: "Restablecer de fábrica",
      reset_text:
        "O facer clic no seguinte botón restablecerás a aplicación o seu estado orixinal.",
      reset_button: "Resetar por defecto",
      reset_sure: "Estás seguro?"
    }
  }
};
