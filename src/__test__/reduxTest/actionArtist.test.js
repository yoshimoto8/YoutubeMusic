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
});
