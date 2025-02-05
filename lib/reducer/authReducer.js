import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated:
    typeof window !== "undefined"
      ? !!sessionStorage.getItem("authToken")
      : false,
  user:
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user"))
      : null,
  token:
    typeof window !== "undefined" ? sessionStorage.getItem("authToken") : null,
  error: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      const { user, token } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      sessionStorage.setItem("authToken", token);
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    logoutAction: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("user");
    },
    authErrorAction: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
    },
  },
});

export const { loginAction, logoutAction, authErrorAction } = authSlice.actions;
export default authSlice.reducer;
