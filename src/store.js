import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "src/features/auth/services/authServices";
import userReducer from "src/features/user/userSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
