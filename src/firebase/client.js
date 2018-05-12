import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCe09fvNVUQKuvnw8UpTt4ppzt-goZiMFE",
  authDomain: "musicpomodoro.firebaseapp.com",
  databaseURL: "https://musicpomodoro.firebaseio.com",
  projectId: "musicpomodoro",
  storageBucket: "musicpomodoro.appspot.com",
  messagingSenderId: "810494812103"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.TwitterAuthProvider();
