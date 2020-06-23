import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-storage";

const firebaseConfig = {
  apiKey: "AIzaSyB42FRJiME5C0MbS_rBNrhlydQnaXf4uiI",
  authDomain: "oscarrc-blog-1499165580887.firebaseapp.com",
  databaseURL: "https://oscarrc-blog-1499165580887.firebaseio.com",
  projectId: "oscarrc-blog-1499165580887",
  storageBucket: "oscarrc-blog-1499165580887.appspot.com",
  messagingSenderId: "24463323918",
  appId: "1:24463323918:web:d086b0df31dbac02ec5d5f",
  measurementId: "G-0HBSL9KTZZ"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

const apps = db.collection("apps");

export default {
  db,
  apps,
  storage
};
