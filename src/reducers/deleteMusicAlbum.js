import { DELETE_ALUBM, SUCCEEDED_DELETE_ALUBM } from "../actions/index";
const initialState = {
  creating: false,
  error: null
};

export const deleteAlbum = (state = initialState, action) => {
  console.log("呼ばれやよ");
  switch (action.type) {
    case DELETE_ALUBM:
      return { ...state, creating: true, error: null };
    case SUCCEEDED_DELETE_ALUBM:
      return { ...state, creating: true, error: null };
    default:
      return state;
  }
};
