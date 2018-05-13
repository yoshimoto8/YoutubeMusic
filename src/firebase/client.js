import firebase from "firebase";
import {
  APIKEY,
  AUTHDOMAIN,
  DATABASEURL,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID
} from "../ENV";

const config = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID
};

firebase.initializeApp(config);

export const ref = firebase.database().ref;
export const auth = firebase.auth;
export const provider = new firebase.auth.TwitterAuthProvider();
