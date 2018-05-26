export const SET_PLAYLIST = "SET_PLAYLIST";

export const SET_ARTIST = "SET_ARTIST";

export const FETCH_YOUTUBE = "FETCH_YOUTUBE";
export const SUCCEEDED_FETCH_YOUTUBE = "SUCCEEDED_FETCH_YOUTUBE";

export const CREATE_ALUBM = "CREATE_ALUBM";
export const SUCCEEDED_CREATE_ALUBM = "SUCCEEDED_CREATE_ALUBM";

export const DELETE_ALUBM = "DELETE_ALUBM";
export const SUCCEEDED_DELETE_ALUBM = "DELETE_ALUBM";

export const setPlayList = (defaultMusic, alubmImage, playListName) => ({
  type: SET_PLAYLIST,
  defaultMusic,
  alubmImage,
  playListName
});

export const setArtist = artistData => ({
  type: SET_ARTIST,
  artistData
});

export const fetchYoutube = searchKeyWord => ({
  type: FETCH_YOUTUBE,
  searchKeyWord
});
export const succeededYoutubeFetch = results => ({
  type: SUCCEEDED_FETCH_YOUTUBE,
  results
});

export const createAlubm = emptyAlbum => ({
  type: CREATE_ALUBM,
  emptyAlbum
});
export const succeededCreateAlubm = results => ({
  type: SUCCEEDED_CREATE_ALUBM,
  results
});

export const deleteAlbum = album => ({
  type: DELETE_ALUBM,
  album
});
export const succeededDeleteAlbum = results => ({
  type: SUCCEEDED_DELETE_ALUBM,
  results
});
