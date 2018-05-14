import { SET_PLAYLIST } from "../actions";

const initialState = { defaultMusic: [] };

export const setPlayList = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return { defaultMusic: action.defaultMusic };
    default:
      return state;
  }
};
