import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { parse, stringify } from "flatted";
import dialogModalReducer from "./src/hook/handle-modal";
import notificationReducer from "./src/hook/notification";
import { DialogModalState } from "./src/hook/handle-modal/types";
import { DialogNotificationState } from "./src/hook/notification/types";
import { apiSlice, loginSlice } from "./src/services/http";
import authReducer from "./src/auth/slice/auth-slice";
import { FilterStateSupplier } from "./src/screens/ManageProviders/ducks/filter/types";
import filterSupplierReducer from "./src/screens/ManageProviders/ducks/filter";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [loginSlice.reducerPath]: loginSlice.reducer,
  auth: authReducer,
  dialogModal: dialogModalReducer,
  notification: notificationReducer,
  filterSupplier: filterSupplierReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["dialogModal"],
  serialize: stringify,
  deserialize: parse,
};

const persistedReducer = persistReducer(persistConfig as any, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    })
      .concat(loginSlice.middleware)
      .concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
