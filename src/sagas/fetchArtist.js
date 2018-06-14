import { put, call } from "redux-saga/effects";
import { succeededFetchArtist } from "../actions/artist";
import fetchArtistAPI from "./artistAPI/fetchArtistAPI";

export function* fetchArtistData() {
  const res = yield call(fetchArtistAPI);
  if (res.length >= 0) {
    console.log(succeededFetchArtist(res));
    yield put(succeededFetchArtist(res));
  } else {
    console.log("error");
  }
}
