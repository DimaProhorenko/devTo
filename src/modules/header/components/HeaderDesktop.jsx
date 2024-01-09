import { Button, Logo, SearchIcon } from "src/modules/common/components";
import Header from "./Header";
import { CREATE_POST } from "src/constants/routes";
import ProfileDropdown from "src/modules/profile/components/ProfileDropdown";

function HeaderDesktop() {
  return (
    <Header>
      <Header.Content>
        <Header.Cell>
          <Logo />
          <SearchIcon />
        </Header.Cell>
        <Header.Cell>
          <Button to={CREATE_POST}>Create Post</Button>
          <ProfileDropdown />
        </Header.Cell>
      </Header.Content>
    </Header>
  );
}
export default HeaderDesktop;
