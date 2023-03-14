import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [thunk, logger];

export const store = configureStore({
  reducer: rootReducer,
  // middleware: [middlewareEnhancer],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});
export const persistor = persistStore(store);
