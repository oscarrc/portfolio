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
    receiveMail(state) {
      state.inbox.push({
        from: "Oscar R.C.",
        subject: "Thank you for contacting",
        avatar: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
        message: `<p>Hey there!</p>
        <p>I've received your email.</p>
        <p>I've reading it as soon as I could, and rest asure I'll be replying</p>
        <p>Thank you for writing</p>
        <p>Cheers</p>`,
        read: false,
        active: false,
        date: new Date()
      });
    },
    mailSent(state, message) {
      state.loading = false;
      state.compose = false;
      state.sent.push(message);
    },
    mailError(state) {
      state.loading = false;
      state.error = true;
    },
    toggleCompose(state) {
      state.compose = !state.compose;
    },
    moveToTrash(state, message) {
      state.trash.push(message);
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
        .then(async res => {
          let response = await res.json();

          if (response.success) {
            commit("mailSent", email);
            setTimeout(() => {
              commit("receiveMail");
            }, 5000);
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
