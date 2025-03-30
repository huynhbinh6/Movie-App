import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./authSlice"; // Import `AuthState`
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer<AuthState>(persistConfig, authReducer), // ✅ Ensure correct typing
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
