import { createApi } from "@reduxjs/toolkit/query/react";
import supabase from "src/client";

export const authApi = createApi({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      queryFn: async ({ email, password, username }) => {
        try {
          const res = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                username,
              },
            },
          });
          if (res.error) {
            throw new Error(res.error.message);
          }
          return res;
        } catch (err) {
          return { error: err.message };
        }
      },
    }),
    login: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const res = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          if (res.error) {
            throw new Error(res.error.message);
          }
          return res;
        } catch (err) {
          return { error: err.message };
        }
      },
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
