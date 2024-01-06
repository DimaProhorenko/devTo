import PropTypes from "prop-types";

import MobileMenu from "./MobileMenu";
import { HOME } from "src/constants/routes";

import homeIcon from "src/assets/icons/home.svg";
import tagIcon from "src/assets/icons/tag.svg";
import devIcon from "src/assets/icons/book.svg";
import tubeIcon from "src/assets/icons/tube.svg";
import { CloseButton, Logo } from "src/modules/common/components";

function MobileMenuContainer({ onCloseMenu }) {
  return (
    <MobileMenu>
      <MobileMenu.Top>
        <Logo />
        <CloseButton onClick={onCloseMenu} />
      </MobileMenu.Top>
      <MobileMenu.Nav>
        <MobileMenu.Item>
          <MobileMenu.Link iconPath={homeIcon} to={HOME}>
            Home
          </MobileMenu.Link>
        </MobileMenu.Item>
        <MobileMenu.Item>
          <MobileMenu.Link iconPath={tagIcon} to={HOME}>
            Tags
          </MobileMenu.Link>
        </MobileMenu.Item>
        <MobileMenu.Item>
          <MobileMenu.Link iconPath={devIcon} to={HOME}>
            About
          </MobileMenu.Link>
        </MobileMenu.Item>
        <MobileMenu.Item>
          <MobileMenu.Link iconPath={tubeIcon} to={HOME}>
            Contact
          </MobileMenu.Link>
        </MobileMenu.Item>
      </MobileMenu.Nav>
    </MobileMenu>
  );
}

MobileMenuContainer.propTypes = {
  onCloseMenu: PropTypes.func.isRequired,
};

export default MobileMenuContainer;
