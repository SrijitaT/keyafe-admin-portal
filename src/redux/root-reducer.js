import { combineReducers } from "redux";

import adminReducer from "./admin/admin.reducer";
import productReducer from "./products/product.reducer";
import orderReducer from "./orders/orders.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

let rootReducer = combineReducers({
  user: adminReducer,
  product: productReducer,
  order: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
