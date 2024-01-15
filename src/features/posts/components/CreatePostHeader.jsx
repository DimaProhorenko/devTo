import { useSelector } from "react-redux";
import { getUser } from "src/features/user/userSlice";
import { Logo } from "src/modules/common/components";
import Header from "src/modules/header/components/Header";
import ProfileDropdown from "src/modules/profile/components/ProfileDropdown";

function CreatePostHeader() {
  const user = useSelector(getUser);

  return (
    <Header>
      <Header.Content>
        <Header.Cell>
          <Logo />
          <Header.Location>Create Post</Header.Location>
        </Header.Cell>
        <Header.Cell>
          <ProfileDropdown user={user} />
        </Header.Cell>
      </Header.Content>
    </Header>
  );
}
export default CreatePostHeader;
