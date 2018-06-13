import { CREATE_ALUBM, SUCCEEDED_CREATE_ALUBM } from "../actions/index";

const initialState = {
  creating: false,
  error: null
};

export const createAlubm = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ALUBM:
      return { ...state, creating: true, error: null };
    case SUCCEEDED_CREATE_ALUBM:
      return { ...state, creating: false, error: null };
    default:
      return state;
  }
};
