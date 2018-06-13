import { takeLatest } from "redux-saga/effects";
import { FETCH_YOUTUBE, CREATE_ALUBM, DELETE_ALUBM } from "../actions";
import { FETCH_ARTIST } from "../actions/artist";
import { fetchArtistData } from "./fetchArtist";
import { fetchYoutubeData } from "./youtube";
import { createAlubmData, deleteAlbumData } from "./musicAlubm";

function* rootSaga() {
  yield [
    takeLatest(FETCH_YOUTUBE, fetchYoutubeData),
    takeLatest(CREATE_ALUBM, createAlubmData),
    takeLatest(DELETE_ALUBM, deleteAlbumData),
    takeLatest(FETCH_ARTIST, fetchArtistData)
  ];
}

export default rootSaga;
