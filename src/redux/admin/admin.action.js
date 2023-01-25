import { AdminActionTypes } from "./admin.types";
import { createAction } from "../utils/reducer.utils";

import axiosInterceptor from "../../utils/api/axiosInterceptor";

export const emailPhoneSignInStart = (token) => {
  return createAction(AdminActionTypes.SIGN_IN_SUCCESS, {
    email_id,
    // name,
    // uid,
    // id,
    // exp,
  });
};
