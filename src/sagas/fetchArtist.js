import { put, call } from "redux-saga/effects";
import { succeededFetchArtist } from "../actions/artist";
import fetchArtistAPI from "./artistAPI/fetchArtistAPI";

export function* fetchArtistData(action) {
  const res = yield call(fetchArtistAPI);
  if (res.length >= 0) {
    yield put(succeededFetchArtist(res));
  } else {
    console.log("error");
  }
}
