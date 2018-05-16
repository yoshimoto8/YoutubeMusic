import { FETCH_YOUTUBE, SUCCEEDED_FETCH_YOUTUBE } from "../actions/index";

const initialState = {
  fetching: false,
  musicList: [],
  error: null
};

export const fetchYoutube = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_YOUTUBE:
      return { ...state, fetching: true, error: null };
    case SUCCEEDED_FETCH_YOUTUBE:
      return { ...state, musicList: action.results, fetching: true };
    default:
      return state;
  }
};
