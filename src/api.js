import { createApi } from "@reduxjs/toolkit/query/react";
import { login, signOut, signUp } from "./features/auth/services/authServices";
import {
  createPost,
  fetchPostById,
} from "./features/posts/services/postService";

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

    // Posts
    createPost: builder.mutation({
      queryFn: createPost,
    }),
    fetchPostById: builder.query({
      queryFn: fetchPostById,
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useSignOutMutation,
  useCreatePostMutation,
  useFetchPostByIdQuery,
} = api;
