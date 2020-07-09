export default {
  name: {
    en_US: "Contact",
    es_ES: "Contacto",
    es_GL: "Contacto"
  },
  path: "/contact",
  native: true,
  decked: false,
  database: true,
  color: "green",
  actions: [
    {
      name: {
        en_US: "Compose",
        es_ES: "Redactar",
        es_GL: "Redactar"
      },
      icon: "mdi-pencil"
    }
  ],
  sections: [
    {
      name: {
        en_US: "Inbox",
        es_ES: "Bandeja de entrada",
        es_GL: "Bandexa de entrada"
      },
      icon: "mdi-inbox"
    },
    {
      name: {
        en_US: "Sent",
        es_ES: "Enviados",
        es_GL: "Enviados"
      },
      icon: "mdi-send"
    },
    {
      name: {
        en_US: "Trash",
        es_ES: "Eliminados",
        es_GL: "Lixo"
      },
      icon: "mdi-delete"
    }
  ],
  strings: {
    en_US: {
      today: "Today",
      empty: "There are no messages",
      new: "New Message",
      send: "Send",
      from: "From",
      to: "To",
      subject: "Subject",
      message: "Write your message",
      no_email: "You must write your email",
      bad_email: "E-mail must be valid",
      no_subject: "What do you want to talk about?",
      no_message: "Please, elaborate the subject a little bit more"
    },
    es_ES: {
      today: "Hoy",
      empty: "No hay mensajes",
      new: "Mensaje nuevo",
      send: "Enviar",
      from: "De",
      to: "A",
      subject: "Asunto",
      message: "Escribe tu mensaje",
      no_email: "Debes escribir tu email",
      bad_email: "El email no es válido",
      no_subject: "¿Sobre qué quieres hablar?",
      no_message: "Por favor, desarrolla el asunto un poco más"
    },
    es_GL: {
      today: "Hoxe",
      empty: "Non hay mensaxes",
      new: "Nova mensaxe",
      send: "Enviar",
      from: "De",
      to: "A",
      subject: "Asunto",
      message: "Escribe a túa mensaxe",
      no_email: "Debes escribir o teu email",
      bad_email: "O email non é válido",
      no_subject: "Sobre que querías falar?",
      no_message: "Por favor, desenvolve o asunto un pouco mais"
    }
  }
};
