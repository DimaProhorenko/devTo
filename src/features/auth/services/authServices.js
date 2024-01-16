import supabase from "src/client";
import { addServiceResponseValidation } from "src/helpers/apiHelpers";

export const signUp = async ({ email, password, username }) => {
  return await addServiceResponseValidation(
    supabase.auth.signUp.bind(supabase.auth),
    {
      email,
      password,
      options: {
        data: {
          first_name: "Dima",
          last_name: "Prokhorenko",
          username,
          profile_image:
            "https://cdn-icons-png.freepik.com/128/4140/4140048.png",
        },
      },
    },
  );
};

export const login = async ({ email, password }) => {
  return await addServiceResponseValidation(
    supabase.auth.signInWithPassword.bind(supabase.auth),
    {
      email,
      password,
    },
  );
};

export const signOut = async () => {
  return await addServiceResponseValidation(
    supabase.auth.signOut.bind(supabase.auth),
  );
};

export const fetchUserFromDB = async (uid) => {
  return await supabase.from("users").select();
};
