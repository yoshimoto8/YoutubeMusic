import firebase from "firebase";

const config = {};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.TwitterAuthProvider();
