import { FETCH_ARTIST, SUCCEEDED_FETCH_ARTIST } from "../../actions/artist";
import { fetchArtist } from "../../reducers/fetchArtist";

describe("fetchArtist reducer", () => {
  it("should return the initial state", () => {
    expect(fetchArtist(undefined, {})).toEqual({
      fetching: false,
      error: null,
      fetchArtist: []
    });
  });

  it("should handle FETCH_ARTIST", () => {
    expect(
      fetchArtist(
        {},
        {
          type: FETCH_ARTIST
        }
      )
    ).toEqual({
      fetching: true
    });

    expect(
      fetchArtist(
        { fetching: true, error: null, fetchArtist: [] },
        { type: SUCCEEDED_FETCH_ARTIST, result: [{ name: "aaaa" }] }
      )
    ).toEqual({
      error: null,
      fetching: false,
      fetchArtist: [{ name: "aaaa" }]
    });
  });
});
