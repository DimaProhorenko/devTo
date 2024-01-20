import { useSelector } from "react-redux";

import { getUser } from "src/features/user/userSlice";
import UserTag from "./UserTag";
import UserForm from "./UserForm";

function SettingsContent() {
  const { username } = useSelector(getUser);
  //   console.log(user);
  return (
    <div className="space-y-4">
      <UserTag>{username}</UserTag>
      <UserForm />
    </div>
  );
}
export default SettingsContent;
