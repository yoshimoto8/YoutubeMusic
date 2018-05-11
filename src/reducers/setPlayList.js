import { SET_PLAYLIST } from "../actions";

const initialState = { defaultMusic: null };

export const setPlayList = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_PLAYLIST:
      return { defaultMusic: action.defaultMusic };
    default:
      return state;
  }
};
