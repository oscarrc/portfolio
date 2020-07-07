import fb from "@/plugins/firebase";

const defaultContact = () => {
  let boxes = {
    inbox: JSON.parse(localStorage.getItem("inbox")) || [],
    sent: JSON.parse(localStorage.getItem("sent")) || [],
    trash: JSON.parse(localStorage.getItem("trash")) || []
  };

  if (boxes.inbox.length + boxes.sent.length + boxes.trash.length == 0) {
    fb.contactCollection
      .where("type", "==", 0)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          boxes.inbox.push(doc.data());
        });
      });
  }

  return {
    ...boxes
  };
};

export default {
  namespaced: true,
  state: defaultContact(),
  mutations: {
    sendingMail(state) {
      state.loading = true;
      state.error = false;
    },
    markAsRead(state, box, index) {
      state[box][index].read = true;
    },
    receiveMail(state, message) {
      state.inbox.push(message);
    },
    mailSent(state, message) {
      state.sent.push(message);
    },
    mailError(state) {
      state.error = true;
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
        .then(res => {
          let response = res.json();

          if (response.success) {
            commit("mailSent", email);
          } else {
            commit("mailError");
          }
        })
        .catch(() => {
          commit("mailError");
        });
    },
    async receiveMail({ commit }) {
      let messages = [];

      await fb.contactCollection
        .where("type", "==", 1)
        .get()
        .then(docs => {
          docs.forEach(doc => {
            messages.push(doc.data());
          });
        });

      commit("receiveMail", messages[0]);
    }
  },
  getters: {
    notifications(state) {
      let count = 0;

      state.inbox.forEach(m => {
        if (m.read == false) count++;
      });

      return count;
    }
  }
};
