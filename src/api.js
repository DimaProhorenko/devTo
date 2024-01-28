import { createApi } from "@reduxjs/toolkit/query/react";
import { login, signOut, signUp } from "./features/auth/services/authServices";
import {
  createPost,
  fetchPostById,
  fetchPosts,
  fetchPostsByAuthorId,
} from "./features/posts/services/postService";
import {
  getUserById,
  updateUserData,
} from "./features/user/services/userServices";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Post"],
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
      invalidatesTags: ["Post"],
    }),
    fetchPosts: builder.query({
      queryFn: fetchPosts,
      providesTags: ["Post"],
    }),
    fetchPostById: builder.query({
      queryFn: fetchPostById,
    }),
    fetchPostsByAuthorId: builder.query({
      queryFn: fetchPostsByAuthorId,
      providesTags: ["Post"],
    }),

    // Users
    getUserById: builder.query({
      queryFn: getUserById,
    }),
    updateUserData: builder.mutation({
      queryFn: updateUserData,
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useSignOutMutation,
  useCreatePostMutation,
  useFetchPostsQuery,
  useLazyFetchPostsQuery,
  useFetchPostByIdQuery,
  useFetchPostsByAuthorIdQuery,
  useGetUserByIdQuery,
  useUpdateUserDataMutation,
} = api;
