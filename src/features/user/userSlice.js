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
          created_at,
          user_metadata: {
            first_name,
            last_name,
            username,
            profile_image,
            website_url,
            location,
            bio,
            branding_color,
          },
        } = action.payload;
        state.user = {
          id,
          email,
          username,
          first_name,
          last_name,
          profile_image,
          website_url,
          location,
          bio,
          branding_color,
          created_at,
        };
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export const getUser = (state) => state.user.user;

export const getUserId = (state) => state.user.user.id;

export const getUserBrandingColor = (state) => state.user.user.branding_color;

export const getUserImage = (state) => state.user.user.profile_image;

export default userSlice.reducer;
