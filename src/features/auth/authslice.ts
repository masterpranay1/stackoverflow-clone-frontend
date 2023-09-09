import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  // loading: boolean;
  // error: string | null;
}

const initialState: AuthState = {
  token: null,
  // loading: false,
  // error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    }
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;

