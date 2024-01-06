import PropTypes from "prop-types";
import { Button, Logo, SearchIcon } from "src/modules/common/components";
import Burger from "./Burger";
import Header from "./Header";
import { LOGIN } from "src/constants/routes";

function HeaderMobile({ onOpenMenu }) {
  return (
    <Header>
      <Header.Content>
        <Header.Cell>
          <Burger onClick={onOpenMenu} />
          <Logo />
        </Header.Cell>
        <Header.Cell>
          <SearchIcon />
          <Button to={LOGIN}>Create Account</Button>
        </Header.Cell>
      </Header.Content>
    </Header>
  );
}

HeaderMobile.propTypes = {
  onOpenMenu: PropTypes.func.isRequired,
};
export default HeaderMobile;
