export default {
  name: "Contact",
  path: "/contact",
  native: true,
  decked: false,
  database: true,
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
  ]
};
