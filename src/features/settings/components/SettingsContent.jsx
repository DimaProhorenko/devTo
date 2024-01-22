import { useSelector } from "react-redux";
import { object } from "yup";

import { Form } from "src/modules/common/components";
import { getUser } from "src/features/user/userSlice";
import UserTag from "./UserTag";
import UserBlock from "./UserBlock";
import {
  validateFirstName,
  validateLastName,
  validateUsername,
} from "src/helpers/validateInputs";
import SubmitBlock from "./SubmitBlock";
import useMutationWithRedirect from "src/hooks/useMutationWithRedirect";
import { useUpdateUserDataMutation } from "src/api";
import supabase from "src/client";

function SettingsContent() {
  const { id, username, first_name, last_name, profile_image } =
    useSelector(getUser);
  const [updateUser] = useMutationWithRedirect(
    useUpdateUserDataMutation,
    "Profile updated",
  );

  return (
    <div className="space-y-4">
      {username && profile_image && (
        <>
          <UserTag>{username}</UserTag>
          <Form
            initialsValues={{
              firstName: first_name || "",
              lastName: last_name || "",
              username: username || "default",
              file: null,
            }}
            validationSchema={object({
              ...validateFirstName,
              ...validateLastName,
              ...validateUsername,
            })}
            onSubmit={async ({ file, ...values }) => {
              updateUser({ ...values, profileImageFile: file });
            }}
          >
            <UserBlock profileImage={profile_image} />
            <SubmitBlock />
          </Form>
        </>
      )}
    </div>
  );
}
export default SettingsContent;
