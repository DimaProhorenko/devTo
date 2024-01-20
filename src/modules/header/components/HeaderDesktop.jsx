import {
  Button,
  LinkBlock,
  Logo,
  SearchIcon,
} from "src/modules/common/components";
import Header from "./Header";
import { CREATE_POST, LOGIN, SIGN_UP } from "src/constants/routes";
import ProfileDropdown from "src/modules/profile/components/ProfileDropdown";
import { useSelector } from "react-redux";
import { getUser } from "src/features/user/userSlice";
import { isUser } from "src/helpers/userUtils";
import SearchBar from "src/modules/common/components/SearchBar";

function HeaderDesktop() {
  const user = useSelector(getUser);
  const isUserSignedIn = isUser(user);

  return (
    <Header>
      <Header.Content>
        <Header.Cell>
          <Logo />
          <SearchBar />
        </Header.Cell>
        <Header.Cell>
          {isUserSignedIn && (
            <>
              <Button to={CREATE_POST}>Create Post</Button>
              <ProfileDropdown user={user} />
            </>
          )}
          {!isUserSignedIn && (
            <>
              <LinkBlock to={LOGIN}>Log in</LinkBlock>
              <Button to={SIGN_UP}>Create Account</Button>
            </>
          )}
        </Header.Cell>
      </Header.Content>
    </Header>
  );
}
export default HeaderDesktop;
