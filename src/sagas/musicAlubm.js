import { put, call } from "redux-saga/effects";
import { succeededCreateAlubm } from "../actions";
import firebase from "firebase";

export default function createAlubmAPI(emptyAlbum) {
  const db = firebase.firestore();
  const isdb = db
    .collection(`users/${sessionStorage.getItem("user")}/userMusicList`)
    .add(emptyAlbum)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });

  return isdb;
}

export function* createAlubmData(action) {
  const responseResult = yield call(createAlubmAPI, action.emptyAlbum);
  if (responseResult) {
    yield put(succeededCreateAlubm());
  } else {
    console.log("err");
  }
}
