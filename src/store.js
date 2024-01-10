import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "src/features/auth/services/authServices";
import userReducer from "src/features/user/userSlice";
import { getItem, setItem } from "./helpers/storage";
import supabase from "./client";

const store = configureStore({
  // preloadedState: {
  //   // user: getItem("user"),
  // },
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// store.subscribe(() => {
//   setItem("user", store.getState().user);
// });

export default store;
