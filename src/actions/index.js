export const SET_PLAYLIST = "SET_PLAYLIST";

export const FETCH_YOUTUBE = "FETCH_YOUTUBE";
export const SUCCEEDED_FETCH_YOUTUBE = "SUCCEEDED_FETCH_YOUTUBE";

export const setPlayList = defaultMusic => ({
  type: SET_PLAYLIST,
  defaultMusic
});

export const fetchYoutube = searchKeyWord => ({
  type: FETCH_YOUTUBE,
  searchKeyWord
});

export const succeededYoutubeFetch = results => ({
  type: SUCCEEDED_FETCH_YOUTUBE,
  results
});
