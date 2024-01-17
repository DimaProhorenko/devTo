import supabase from "src/client";

export const createPost = async ({ authorId, title, body }) => {
  return await supabase
    .from("posts")
    .insert([{ authorId, title, body }])
    .select();
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

export const fetchPosts = async () => {
  try {
    const { data, error } = await supabase.from("posts").select();

    if (error) {
      throw new Error(error);
    }
    return { data };
  } catch (err) {
    return { error: err.message };
  }
};
