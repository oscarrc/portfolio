const defaultContact = () => {
  let contact = JSON.parse(localStorage.getItem("contact"));
  let defaultContact;

  if (contact) {
    defaultContact = {
      ...contact,
      loading: false,
      compose: false,
      error: false
    };
  } else {
    defaultContact = {
      ...require("./config").default,
      loading: false,
      compose: false,
      error: false
    };
  }

  return defaultContact;
};

export default {
  namespaced: true,
  state: defaultContact(),
  mutations: {
    sendingMail(state) {
      state.loading = true;
      state.error = false;
    },
    mailSent(state) {
      state.loading = false;
      state.compose = false;
    },
    mailError(state) {
      state.loading = false;
      state.error = true;
    },
    toggleCompose(state) {
      state.compose = !state.compose;
    }
  },
  actions: {
    sendMail({ commit }, email) {
      commit("sendingMail");
      fetch(
        "https://europe-west3-oscarrc-blog-1499165580887.cloudfunctions.net/sendMail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(email)
        }
      )
        .then(res => {
          if (res.success) {
            commit("mailSent");
          } else {
            commit("mailError");
          }
        })
        .catch(() => {
          commit("mailError");
        });
    }
  }
};
