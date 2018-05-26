import { SET_ARTIST } from "../actions";

const initialState = { defaultMusic: [] };
export const setArtist = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTIST:
      return { ...action.artistData };
    default:
      return state;
  }
};
