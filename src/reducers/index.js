import { combineReducers } from "redux";
import { setPlayList } from "./setPlayList";
import { fetchYoutube } from "./fetchYoutube";
import { createAlubm } from "./createMusicAlubum";
import { deleteAlbum } from "./deleteMusicAlbum";
const rootReducer = combineReducers({
  setPlayList,
  fetchYoutube,
  createAlubm,
  deleteAlbum
});

export default rootReducer;
