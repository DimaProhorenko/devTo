import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import userReducer from "src/features/user/userSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
