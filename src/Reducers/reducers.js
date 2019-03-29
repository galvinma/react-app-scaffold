//actions
import { AUTHENTICATED }

from "../Constants/action-types";

const initialState = {
  auth_status: {auth_status: false},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return getAuthStatus(state, action.auth_status)
    default:
      return state;
  }
};

function getAuthStatus(state, auth_status) {
  return {
    ...state,
    auth_status: auth_status
  }
}

export default rootReducer;
