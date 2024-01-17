import { createApi } from "@reduxjs/toolkit/query/react";
import { login, signOut, signUp } from "./features/auth/services/authServices";
import {
  createPost,
  fetchPostById,
  fetchPosts,
} from "./features/posts/services/postService";
import { getUserById } from "./features/user/services/userServices";

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
    fetchPosts: builder.query({
      queryFn: fetchPosts,
    }),
    fetchPostById: builder.query({
      queryFn: fetchPostById,
    }),

    // Users
    getUserById: builder.query({
      queryFn: getUserById,
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useSignOutMutation,
  useCreatePostMutation,
  useFetchPostsQuery,
  useFetchPostByIdQuery,
  useGetUserByIdQuery,
} = api;
