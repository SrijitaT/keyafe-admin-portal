import { AdminActionTypes } from "./admin.types";
import { createAction } from "../utils/reducer.utils";
import decryptToken from "../../utils/token-decryption/decryptToken";

import axiosInterceptor from "../../utils/api/axiosInterceptor";

export const emailPhoneSignInStart = (token) => {
  window.localStorage.setItem("userToken", token);
  const decodedToken = decryptToken(token);
  console.log("token", decodedToken);
  const { email_id, name, phone, uid, id, exp, iat } = decodedToken;
  return createAction(AdminActionTypes.SIGN_IN_SUCCESS, {
    email_id,
    name,
    phone,
    uid,
    id,
    exp,
    iat,
  });
};

export const signOutSuccess =
  (callLogoutApi = true) =>
  async (dispatch) => {
    if (callLogoutApi) await axiosInterceptor.post("users/logout");
    dispatch(createAction(AdminActionTypes.SIGN_OUT_SUCCESS));
  };

export const setCurrentUser = (user) =>
  createAction(AdminActionTypes.SET_CURRENT_ADMIN, user);
