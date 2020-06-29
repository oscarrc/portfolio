export default {
  name: "Contact",
  path: "/contact",
  native: true,
  decked: false,
  color: "green",
  actions: [
    {
      name: "Compose",
      icon: "mdi-pencil"
    }
  ],
  sections: [
    {
      name: "Inbox",
      icon: "mdi-inbox"
    },
    {
      name: "Sent",
      icon: "mdi-send"
    },
    {
      name: "Trash",
      icon: "mdi-delete"
    }
  ],
  inbox: [
    {
      from: "Oscar R.C.",
      subject: "Welcome to my site",
      avatar: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
      message:
        "<p>Hey there!</p><p>I hope you're enjoying my site.</p><p>If you have any questions about me or what I do don't hesitate to reply this email or write a new one. I'll be happy to answer.</p><p>Cheers.</p>",
      read: false,
      active: false,
      date: new Date()
    }
  ],
  sent: [],
  trash: [],
  notifications: function() {
    return this.inbox.forEach(i => {
      let t = 0;
      if (!i.read) {
        t++;
      }

      return t;
    });
  }
};
