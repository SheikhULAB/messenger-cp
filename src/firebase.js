import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCeL9LESpIqMwJwYkQiMkapQmjVpEoPejk",
  authDomain: "messenger-cp-dc19a.firebaseapp.com",
  projectId: "messenger-cp-dc19a",
  storageBucket: "messenger-cp-dc19a.appspot.com",
  messagingSenderId: "189823780234",
  appId: "1:189823780234:web:99486b2f7801f63c13f473",
});

const db = firebaseApp.firestore();

export default db;
