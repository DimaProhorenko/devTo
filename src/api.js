import { createApi } from "@reduxjs/toolkit/query/react";
import { login, signOut, signUp } from "./features/auth/services/authServices";

export const api = createApi({
  reducerPath: "api",
  endpoints: (builder) => ({
    // AUTH
    signUp: builder.mutation({
      queryFn: signUp,
    }),
    login: builder.mutation({
      queryFn: login,
    }),
    signOut: builder.mutation({
      queryFn: signOut,
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useSignOutMutation } = api;
