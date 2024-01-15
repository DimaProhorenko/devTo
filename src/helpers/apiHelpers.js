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
