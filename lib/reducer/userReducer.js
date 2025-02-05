import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearUser(state) {
      state.user = null;
      state.token = null;
      state.error = null;
    },
    setUserError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setUser, clearUser, setUserError } = userSlice.actions;
export default userSlice.reducer;
