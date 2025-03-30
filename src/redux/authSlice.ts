import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      AsyncStorage.setItem("authToken", action.payload);
    },
    logout: (state) => {
      state.token = null;
      AsyncStorage.removeItem("authToken")
    },
    setTokenFromStorage: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    }
  },
});

export const { login, logout, setTokenFromStorage } = authSlice.actions;
export default authSlice.reducer;

