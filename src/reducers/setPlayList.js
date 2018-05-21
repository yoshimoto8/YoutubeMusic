import { SET_PLAYLIST } from "../actions";

const initialState = { defaultMusic: [] };
export const setPlayList = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      const isAddMylist = action.alubmImage ? true : false;
      return {
        defaultMusic: action.defaultMusic,
        alubmImage: action.alubmImage,
        playListName: action.playListName,
        isAddMylist: isAddMylist
      };
    default:
      return state;
  }
};
