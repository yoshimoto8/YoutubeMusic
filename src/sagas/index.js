import { takeLatest } from "redux-saga/effects";
import { FETCH_YOUTUBE } from "../actions";
import { fetchYoutubeData } from "./youtube";

function* rootSaga() {
  yield [takeLatest(FETCH_YOUTUBE, fetchYoutubeData)];
}

export default rootSaga;
