import { createApi } from "@reduxjs/toolkit/query/react";
import supabase from "src/client";

export const authApi = createApi({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const res = await supabase.auth.signUp({ email, password });
          return res;
        } catch (err) {
          return err;
        }
      },
    }),
  }),
});

export const { useSignUpMutation } = authApi;