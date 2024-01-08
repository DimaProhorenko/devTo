import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Button, Logo, SearchIcon } from "src/modules/common/components";
import Burger from "./Burger";
import Header from "./Header";

import { SIGN_UP } from "src/constants/routes";
import { getUser } from "src/features/user/userSlice";

function HeaderMobile({ onOpenMenu }) {
  const user = useSelector(getUser);
  console.log(user);
  return (
    <Header>
      <Header.Content>
        <Header.Cell>
          <Burger onClick={onOpenMenu} />
          <Logo />
        </Header.Cell>
        <Header.Cell>
          <SearchIcon />
          <Button to={SIGN_UP}>Create Account</Button>
        </Header.Cell>
      </Header.Content>
    </Header>
  );
}

HeaderMobile.propTypes = {
  onOpenMenu: PropTypes.func.isRequired,
};
export default HeaderMobile;
