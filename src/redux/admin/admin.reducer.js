import { AdminActionTypes } from "./admin.types";

const INITIAL_STATE = {
  currentUser: null,
};

const adminReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case AdminActionTypes.SET_CURRENT_ADMIN:
      return {
        ...state,
        currentUser: payload,
      };
    case AdminActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case AdminActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default adminReducer;
