import { put, call } from "redux-saga/effects";
import setStorageSearch from "./setStorage/searchKeyWord.js";
import { succeededYoutubeFetch } from "../actions";
import fetchYoutubeAPI from "./youtubeAPI/fetchYoutubeAPI";

export function* fetchYoutubeData(action) {
  const responseResult = yield call(fetchYoutubeAPI, action.searchKeyWord);
  if (responseResult) {
    yield call(setStorageSearch, action.searchKeyWord);
    yield put(succeededYoutubeFetch(responseResult.data.items));
  } else {
    console.log("err");
  }
}
