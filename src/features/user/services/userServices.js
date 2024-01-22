import supabase from "src/client";

export const getUserById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, first_name, last_name, username, profile_image, created_at")
      .eq("id", id);
    if (error) {
      throw new Error(error);
    }

    return { data: data[0] };
  } catch (err) {
    return { error: err.message };
  }
};

export const updateUserData = async ({ firstName, lastName, username }) => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        first_name: firstName,
        last_name: lastName,
        username,
      },
    });
    if (error) {
      throw new Error(error);
    }

    return { data };
  } catch (err) {
    return { error: err.message };
  }
};
