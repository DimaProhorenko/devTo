import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      // state.session = action.payload.session;
    },
  },
});

export const { setUser } = userSlice.actions;

export const getUser = (state) => state.user.user;

export default userSlice.reducer;
