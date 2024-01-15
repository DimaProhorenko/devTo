import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { authApi } from "src/features/auth/services/authServices";
import userReducer from "src/features/user/userSlice";
import { createPostApi } from "./features/createPost/services/createPostService";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // [authApi.reducerPath]: authApi.reducer,
    // [createPostApi.reducerPath]: createPostApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  // .concat(authApi.middleware)
  // .concat(createPostApi.middleware),
});

export default store;
