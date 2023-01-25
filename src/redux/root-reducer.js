import { combineReducers } from "redux";

import adminReducer from "./admin/admin.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

let rootReducer = combineReducers({
  user: adminReducer,
});

export default persistReducer(persistConfig, rootReducer);
