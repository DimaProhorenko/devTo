import { createApi } from "@reduxjs/toolkit/query/react";
import supabase from "src/client";
import { addServiceResponseValidation } from "src/helpers/apiHelpers";

export const createPostApi = createApi({
  reducerPath: "createPost",
  endpoints: (builder) => ({
    createPost: builder.mutation({
      queryFn: async ({ authorId, title, body }) => {
        try {
          const res = await supabase.from("posts").insert([
            {
              authorId,
              title,
              body,
            },
          ]);

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

// export const { useCreatePostMutation } = createPostApi;

export const createPost = async ({ authorId, title, body }) => {
  return addServiceResponseValidation(supabase.from("posts").insert, [
    {
      authorId,
      title,
      body,
    },
  ]);
};
