import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-storage";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DB_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

let stores = {};
let collections = {};

require
  .context("@/apps", true, /config.js$/)
  .keys()
  .forEach(x => {
    let config = require("@/apps" + x.substr(1)).default;

    if (config.storage)
      stores[config.name.en_US.toLowerCase() + "Store"] = storage.ref(
        config.name.en_US.toLowerCase()
      );

    if (config.database)
      collections[
        config.name.en_US.toLowerCase() + "Collection"
      ] = db.collection(config.name.en_US.toLowerCase());
  });

export default {
  ...stores,
  ...collections
};
