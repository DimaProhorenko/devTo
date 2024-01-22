import { useSelector } from "react-redux";
import { object } from "yup";

import { useUpdateUserDataMutation } from "src/api";
import { getUser } from "src/features/user/userSlice";

import { Form } from "src/modules/common/components";
import UserTag from "./UserTag";
import BasicsBlock from "./BasicsBlock";
import UserBlock from "./UserBlock";
import {
  validateFirstName,
  validateLastName,
  validateUsername,
  validateUrl,
} from "src/helpers/validateInputs";
import SubmitBlock from "./SubmitBlock";
import useMutationWithRedirect from "src/hooks/useMutationWithRedirect";
import BrandingBlock from "./BrandingBlock";

function SettingsContent() {
  const {
    id,
    username,
    first_name,
    last_name,
    profile_image,
    website_url,
    bio,
    location,
    branding_color,
  } = useSelector(getUser);
  const [updateUser] = useMutationWithRedirect(
    useUpdateUserDataMutation,
    "Profile updated",
  );

  console.log(bio);

  return (
    <div className="space-y-4">
      {username && profile_image && (
        <>
          <UserTag>{username}</UserTag>
          <Form
            initialsValues={{
              firstName: first_name || "",
              lastName: last_name || "",
              username: username || "",
              file: null,
              websiteUrl: website_url || "",
              location: location || "",
              bio: bio || "",
              brandingColor: branding_color || "#000",
            }}
            validationSchema={object({
              ...validateFirstName,
              ...validateLastName,
              ...validateUsername,
              websiteUrl: validateUrl,
            })}
            onSubmit={async ({ file, ...values }) => {
              updateUser({ ...values, profileImageFile: file });
            }}
          >
            <UserBlock profileImage={profile_image} />
            <BasicsBlock />
            <BrandingBlock />
            <SubmitBlock />
          </Form>
        </>
      )}
    </div>
  );
}
export default SettingsContent;
