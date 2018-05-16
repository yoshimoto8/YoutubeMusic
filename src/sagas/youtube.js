import { put, call } from "redux-saga/effects";
import { succeededYoutubeFetch } from "../actions";
import axios from "axios";
import { YOUTUBEAPI } from "../ENV";

export default function fetchYoutubeAPI(keyword) {
  return axios.get(
    `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&key=${YOUTUBEAPI}`
  );
}

export function* fetchYoutubeData(action) {
  const responseResult = yield call(fetchYoutubeAPI, action.searchKeyWord);
  if (responseResult) {
    yield put(succeededYoutubeFetch(responseResult.data.items));
  } else {
    console.log("err");
  }
}