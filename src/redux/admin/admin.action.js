import { AdminActionTypes } from "./admin.types";
import { createAction } from "../utils/reducer.utils";
import decryptToken from "../../utils/token-decryption/decryptToken";

import axiosInterceptor from "../../utils/api/axiosInterceptor";

export const emailPhoneSignInStart = (token) => {
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
