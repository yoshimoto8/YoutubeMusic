import { combineReducers } from "redux";
import { setPlayList } from "./setPlayList";
import { fetchYoutube } from "./fetchYoutube";
import { createAlubm } from "./createMusicAlubum";

const rootReducer = combineReducers({ setPlayList, fetchYoutube, createAlubm });

export default rootReducer;
