import { POSTS_PER_PAGE } from "src/constants/db";

// Bind supabase or supabase will be undefined
export async function addServiceResponseValidation(cb, cbOptions) {
  console.log(cb);
  try {
    const { data, error } = await cb(cbOptions);
    if (error) {
      throw new Error(error.message);
    }
    return { data };
  } catch (err) {
    return { error: err.message };
  }
}

export const getFromAndToRange = (page, size) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size : size;

  return { from, to: to - 1 };
};

export const getPostsFromAndTo = (start) => {
  return getFromAndToRange(start, POSTS_PER_PAGE);
};
