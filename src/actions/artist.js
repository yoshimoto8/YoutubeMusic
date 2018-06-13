export const FETCH_ARTIST = "FETCH_ARTIST";
export const SUCCEEDED_FETCH_ARTIST = "SUCCEEDED_FETCH_ARTIST";

export const fetchArtist = () => ({
  type: FETCH_ARTIST
});

export const succeededFetchArtist = result => ({
  type: SUCCEEDED_FETCH_ARTIST,
  result
});
