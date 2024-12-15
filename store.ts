import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
// Use AsyncStorage para React Native
import AsyncStorage from "@react-native-async-storage/async-storage";
import dialogModalReducer from "./src/hook/handle-modal";
import { DialogModalState } from "./src/hook/handle-modal/types";
// import { apiSlice, loginSlice } from "./services/http";

export interface ApplicationState {
  // [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>;
  // [loginSlice.reducerPath]: ReturnType<typeof loginSlice.reducer>;
  dialogModal: DialogModalState;
}

// Combine os reducers
const rootReducer = combineReducers({
  // [apiSlice.reducerPath]: apiSlice.reducer,
  // [loginSlice.reducerPath]: loginSlice.reducer,
  dialogModal: dialogModalReducer,
});

// Configuração do persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage, // Use AsyncStorage para React Native
  whitelist: ["dialogModal"], // Liste os estados que precisam ser persistidos
};

// Criação do persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuração da store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false, // Desabilitar checks para evitar erros de serialização
      immutableCheck: false, // Desabilitar checks de imutabilidade para melhorar performance
    }),
  //   .concat(loginSlice.middleware)
  //   .concat(apiSlice.middleware),
});

// Configuração dos listeners para consultas em RTK Query (se necessário)
setupListeners(store.dispatch);

// Configuração do persistor
export const persistor = persistStore(store);

// Tipos para uso com TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
