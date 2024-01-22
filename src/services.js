/* eslint-disable no-unreachable */
import supabase from "./client";

export const uploadImage = async (file, fileName) => {
  if (file) {
    console.log(file);
    try {
      const { data, error } = await supabase.storage
        .from("profiles")
        .upload(fileName, file, {
          upsert: true,
        });
      console.log(data);
      if (error) throw new Error(error.message);
      return { data };
    } catch (error) {
      return { error: error.message };
    }
  }
  return null;
};

export const getImageUrl = async (imagePath) => {
  return await supabase.storage.from("profiles").getPublicUrl(imagePath);
};
