import supabase from "src/client";
import { getImageUrl, uploadImage } from "src/services";

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

export const updateUserData = async (
  { firstName, lastName, username, profileImageFile },
  { getState },
) => {
  try {
    let imageUrl = getState().user.user.profile_image;
    if (profileImageFile) {
      const { data: profileImage } = await uploadImage(
        profileImageFile,
        `${username}/${profileImageFile.type.split("/")[1]}`,
      );

      const { data: profileUrl } = await getImageUrl(profileImage.path);
      if (profileUrl) {
        imageUrl = profileUrl.publicUrl;
      }
    }

    const { data, error } = await supabase.auth.updateUser({
      data: {
        first_name: firstName,
        last_name: lastName,
        username,
        profile_image: imageUrl,
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
