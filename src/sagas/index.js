import { takeLatest } from "redux-saga/effects";
import { FETCH_YOUTUBE, CREATE_ALUBM } from "../actions";
import { fetchYoutubeData } from "./youtube";
import { createAlubmData } from "./musicAlubm";

function* rootSaga() {
  yield [
    takeLatest(FETCH_YOUTUBE, fetchYoutubeData),
    takeLatest(CREATE_ALUBM, createAlubmData)
  ];
}

export default rootSaga;
