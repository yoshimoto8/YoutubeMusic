import { takeLatest } from "redux-saga/effects";
import { FETCH_YOUTUBE, CREATE_ALUBM, DELETE_ALUBM } from "../actions";
import { fetchYoutubeData } from "./youtube";
import { createAlubmData, deleteAlbumData } from "./musicAlubm";

function* rootSaga() {
  yield [
    takeLatest(FETCH_YOUTUBE, fetchYoutubeData),
    takeLatest(CREATE_ALUBM, createAlubmData),
    takeLatest(DELETE_ALUBM, deleteAlbumData)
  ];
}

export default rootSaga;
