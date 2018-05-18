import { put, call } from "redux-saga/effects";
import { succeededCreateAlubm } from "../actions";
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
  const isdb = db
    .collection(`users/${sessionStorage.getItem("user")}/userMusicList`)
    .doc(alubm.key)
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
  console.log(responseResult);
  if (responseResult) {
    console.log("成功！");
  } else {
    console.log("err");
  }
}
