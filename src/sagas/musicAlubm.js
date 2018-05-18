import { put, call } from "redux-saga/effects";
import { succeededCreateAlubm, succeededDeleteAlbum } from "../actions";
import createAlubmAPI from "./musicAlubmAPI/createAlubmAPI";
import firebase from "firebase";

export function* createAlubmData(action) {
  const responseResult = yield call(createAlubmAPI, action.emptyAlbum);
  if (responseResult) {
    yield put(succeededCreateAlubm());
  } else {
    console.log("err");
  }
}

export default function deleteAlbumAPI(alubm) {
  const db = firebase.firestore();
  debugger;
  const isdb = db
    .collection(`users/${sessionStorage.getItem("user")}/userMusicList`)
    .doc("nsPzPZ6S3LNBHGIX9k9M")
    .delete()
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });

  return isdb;
}

export function* deleteAlbumData(action) {
  const responseResult = yield call(deleteAlbumAPI, action.album);
  if (responseResult) {
    yield put(succeededDeleteAlbum());
  } else {
    console.log("err");
  }
}
