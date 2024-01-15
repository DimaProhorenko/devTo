import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "src/features/auth/services/authServices";
import userReducer from "src/features/user/userSlice";
import { createPostApi } from "./features/createPost/services/createPostService";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [createPostApi.reducerPath]: createPostApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(createPostApi.middleware),
});

export default store;
