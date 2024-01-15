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
          username,
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
