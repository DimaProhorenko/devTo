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

export const getFromAndToRange = (start, step) => {
  let from = start * step;
  let to = from + step;

  if (start > 0) {
    from += 1;
  }

  return {
    from,
    to,
  };
};

export const getPostsFromAndTo = (start) => {
  return getFromAndToRange(start, POSTS_PER_PAGE);
};
