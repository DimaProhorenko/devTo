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

function SettingsContent() {
  const { username, first_name, last_name } = useSelector(getUser);
  const [updateUser] = useMutationWithRedirect(
    useUpdateUserDataMutation,
    "Profile updated",
  );

  console.log(username, first_name, last_name);

  return (
    <div className="space-y-4">
      {username && (
        <>
          <UserTag>{username}</UserTag>
          <Form
            initialsValues={{
              firstName: first_name || "",
              lastName: last_name || "",
              username: username || "default",
            }}
            validationSchema={object({
              ...validateFirstName,
              ...validateLastName,
              ...validateUsername,
            })}
            onSubmit={(values) => {
              console.log(values);
              updateUser(values);
            }}
          >
            <UserBlock username={username} />
            <SubmitBlock />
          </Form>
        </>
      )}
    </div>
  );
}
export default SettingsContent;
