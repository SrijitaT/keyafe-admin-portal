import { OrderActionTypes } from "./orders.types";

const INITIAL_STATE = {
  orders: [],
};

const orderReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case OrderActionTypes.GET_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
