import { FETCH_ARTIST, SUCCEEDED_FETCH_ARTIST } from "../actions/artist";

const initialState = {
  fetching: true,
  error: null,
  fetchArtist: []
};

export const fetchArtist = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTIST:
      return { ...state, fetching: true };
    case SUCCEEDED_FETCH_ARTIST:
      return { ...state, fetchArtist: action.result, fetching: false };
    default:
      return state;
  }
};
