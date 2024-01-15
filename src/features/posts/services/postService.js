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
  return await supabase
    .from("posts")
    .insert([{ authorId, title, body }])
    .select();
  // return await addServiceResponseValidation(
  //   supabase.from("posts").insert.bind(supabase),
  //   [
  //     {
  //       authorId,
  //       title,
  //       body,
  //     },
  //   ],
  // );
};

export const fetchPostById = async (id) => {
  try {
    const { data, error } = await supabase.from("posts").select().eq("id", id);

    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (err) {
    return { error: err.message };
  }
};