import { createApi } from "@reduxjs/toolkit/query/react";
import supabase from "src/client";
import { addServiceResponseValidation } from "src/helpers/apiHelpers";

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
    signOut: builder.mutation({
      queryFn: async () => {
        try {
          const res = await supabase.auth.signOut();
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

export const { useSignUpMutation, useLoginMutation, useSignOutMutation } =
  authApi;

export const signUp = async ({ email, password, username }) => {
  return await addServiceResponseValidation(
    supabase.auth.signUp.bind(supabase.auth),
    {
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    },
  );
};

export const login = async ({ email, password }) => {
  return await addServiceResponseValidation(
    supabase.auth.signInWithPassword.bind(supabase.auth),
    {
      email,
      password,
    },
  );
};

export const signOut = async () => {
  return await addServiceResponseValidation(
    supabase.auth.signOut.bind(supabase.auth),
  );
};
