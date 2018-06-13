import {
  FETCH_ARTIST,
  SUCCEEDED_FETCH_ARTIST,
  fetchArtist,
  succeededFetchArtist
} from "../../actions/artist";

describe("artist actions", () => {
  it("should create an action", () => {
    const expectedAction = {
      type: FETCH_ARTIST
    };
    expect(fetchArtist()).toEqual(expectedAction);
  });
  it("should create an action", () => {
    const result = [
      {
        createdOn: "Sun Jun 03 2018 12:19:40 GMT+0900 (JST)",
        key: "XVn5niHOpYxnedjJi7nc",
        musicList: [],
        name: "aaaa",
        src:
          "https://firebasestorage.googleapis.com/v0/b/musicpomodoro.appspot.com/o/upload_files%2Funnamed.jpg?alt=media&token=b181a267-9923-423b-890f-ba2096fcbdd9"
      }
    ];
    const expectedAction = {
      type: SUCCEEDED_FETCH_ARTIST,
      result
    };
    expect(succeededFetchArtist(result)).toEqual(expectedAction);
  });
});
