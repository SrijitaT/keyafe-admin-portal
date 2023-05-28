import { OrderActionTypes } from "./orders.types";

import { createAction } from "../utils/reducer.utils";

import axiosInterceptor from "../../utils/api/axiosInterceptor";

// export const getOrders = (orders) => async (dispatch) => {
//   const response = await axiosInterceptor.get("admin/orders?page=1");
//   console.log(response?.data?.data);

//   dispatch(createAction(OrderActionTypes.GET_ORDERS, response?.data?.data));
// };

export const getOrders = (orders) =>
  createAction(OrderActionTypes.GET_ORDERS, orders);
