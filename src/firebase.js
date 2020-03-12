import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1a9Yw8Myc2GA7n-9twuN_wayQts6u1hA",
  authDomain: "todo-45391.firebaseapp.com",
  databaseURL: "https://todo-45391.firebaseio.com",
  projectId: "todo-45391",
  storageBucket: "todo-45391.appspot.com",
  messagingSenderId: "824639754846",
  appId: "1:824639754846:web:d81151efa5959ab51c9acf",
  measurementId: "G-YEV6X3QMQC"
});

firebaseApp
  .firestore()
  .enablePersistence()
  .catch(() => {});

export const db = firebaseApp.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
