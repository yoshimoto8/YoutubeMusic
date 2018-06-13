import { combineReducers } from "redux";
import { setPlayList } from "./setPlayList";
import { fetchYoutube } from "./fetchYoutube";
import { createAlubm } from "./createMusicAlubum";
import { deleteAlbum } from "./deleteMusicAlbum";
import { setArtist } from "./setArtist";
import { fetchArtist } from "./fetchArtist";
const rootReducer = combineReducers({
  setPlayList,
  fetchYoutube,
  createAlubm,
  deleteAlbum,
  setArtist,
  fetchArtist
});

export default rootReducer;
