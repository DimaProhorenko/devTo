import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      if (!action.payload) {
        state.user = {};
      } else {
        const {
          id,
          email,
          user_metadata: { first_name, last_name, username, profile_image },
        } = action.payload;
        state.user = {
          id,
          email,
          username,
          first_name,
          last_name,
          profile_image,
        };
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export const getUser = (state) => state.user.user;

export const getUserId = (state) => state.user.user.id;

export default userSlice.reducer;
