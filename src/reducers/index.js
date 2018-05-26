import { combineReducers } from "redux";
import { setPlayList } from "./setPlayList";
import { fetchYoutube } from "./fetchYoutube";
import { createAlubm } from "./createMusicAlubum";
import { deleteAlbum } from "./deleteMusicAlbum";
import { setArtist } from "./setArtist";
const rootReducer = combineReducers({
  setPlayList,
  fetchYoutube,
  createAlubm,
  deleteAlbum,
  setArtist
});

export default rootReducer;
