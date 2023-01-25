import { AdminActionTypes } from "./admin.types";
import { createAction } from "../utils/reducer.utils";
import DecodeToken from "../../utils/decodeToken/";

import axiosInterceptor from "../../utils/api/axiosInterceptor";

export const emailPhoneSignInStart = (token) => {
  const decodedToken = DecodeToken(token);
  return createAction(AdminActionTypes.SIGN_IN_SUCCESS, {
    email_id,
    // name,
    // uid,
    // id,
    // exp,
  });
};
