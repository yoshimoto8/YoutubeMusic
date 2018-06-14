import { put, call, take } from "redux-saga/effects";
import { succeededFetchArtist } from "../../actions/artist";
import fetchArtistAPI from "../../sagas/artistAPI/fetchArtistAPI";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";

function* fetchArtistData() {
  const res = yield call(fetchArtistAPI);
  if (res.length >= 0) {
    yield put(succeededFetchArtist(res));
  } else {
    console.log("error");
  }
}

it("work test fetchArtistData success", () => {
  return expectSaga(fetchArtistData)
    .provide([
      [
        matchers.call.fn(fetchArtistAPI),
        [
          {
            createdOn: "Sun Jun 03 2018 12:19:40 GMT+0900 (JST)",
            key: "XVn5niHOpYxnedjJi7nc",
            musicList: [],
            name: "aaaa",
            src:
              "https://firebasestorage.googleapis.com/v0/b/musicpomodoro.appspot.com/o/upload_files%2Funnamed.jpg?alt=media&token=b181a267-9923-423b-890f-ba2096fcbdd9"
          }
        ]
      ]
    ])
    .put({
      result: [
        {
          createdOn: "Sun Jun 03 2018 12:19:40 GMT+0900 (JST)",
          key: "XVn5niHOpYxnedjJi7nc",
          musicList: [],
          name: "aaaa",
          src:
            "https://firebasestorage.googleapis.com/v0/b/musicpomodoro.appspot.com/o/upload_files%2Funnamed.jpg?alt=media&token=b181a267-9923-423b-890f-ba2096fcbdd9"
        }
      ],
      type: "SUCCEEDED_FETCH_ARTIST"
    })
    .run();
});
