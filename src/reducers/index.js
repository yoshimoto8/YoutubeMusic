import { combineReducers } from "redux";
import { setPlayList } from "./setPlayList";
import { fetchYoutube } from "./fetchYoutube";

const rootReducer = combineReducers({ setPlayList, fetchYoutube });

export default rootReducer;
