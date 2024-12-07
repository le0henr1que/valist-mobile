import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dialogModalReducer from "./src/hook/handle-modal";
import { DialogModalState } from "./src/hook/handle-modal/types";
// import { apiSlice, loginSlice } from "./services/http";

export interface ApplicationState {
  //   [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>;
  //   [loginSlice.reducerPath]: ReturnType<typeof loginSlice.reducer>;
  dialogModal: DialogModalState;
}

const rootReducer = combineReducers({
  //   [apiSlice.reducerPath]: apiSlice.reducer,
  //   [loginSlice.reducerPath]: loginSlice.reducer,
  dialogModal: dialogModalReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["dialogModal"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
  //   .concat(loginSlice.middleware)
  //   .concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
