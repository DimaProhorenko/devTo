export const isUser = (user) => Object.keys(user).length > 0;

export const renameUserFields = (user) => {
  const {
    first_name: firstName,
    last_name: lastName,
    profile_image: profileImage,
    created_at: createdAt,
  } = user;
  return { firstName, lastName, profileImage, createdAt };
};
