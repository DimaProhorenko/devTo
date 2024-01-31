import supabase from "src/client";
import { POSTS_PER_PAGE } from "src/constants/db";

export const createPost = async ({ authorId, title, body }) => {
  return await supabase
    .from("posts")
    .insert([{ authorId, title, body }])
    .select();
};

export const fetchPostById = async (id) => {
  try {
    const res = await supabase.from("posts").select().eq("id", id);
    const { data, error } = res;
    console.log("API", res);

    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (err) {
    return { error: err.message };
  }
};

export const fetchPosts = async () => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select()
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (err) {
    return { error: err.message };
  }
};

export const fetchPostsWithPagination = async ({ from, to }) => {
  console.log("fetching");
  try {
    const { data, error } = await supabase
      .from("posts")
      .select()
      .range(from, to)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (err) {
    return { error: err.message };
  }
};

export const fetchPostsByAuthorId = async (id) => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select()
      .eq("authorId", id)
      .range(0, POSTS_PER_PAGE - 1);
    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (err) {
    return { error: err.message };
  }
};
