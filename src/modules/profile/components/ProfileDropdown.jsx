import PropTypes from "prop-types";
import { Dropdown, LinkBlock } from "src/modules/common/components";
import ProfileImage from "./ProfileImage";

import profileIcon from "src/assets/icons/profile.png";
import { HOME, SIGN_OUT } from "src/constants/routes";
import ProfileNav from "./ProfileNav";

function ProfileDropdown({ user }) {
  const { username } = user;
  return (
    <Dropdown>
      <Dropdown.Toggler>
        <ProfileImage src={profileIcon} alt="name" />
      </Dropdown.Toggler>
      <Dropdown.Body>
        <Dropdown.Top>
          <LinkBlock to={HOME}>@bxleinx</LinkBlock>
        </Dropdown.Top>
        <Dropdown.Mid>
          <ProfileNav />
        </Dropdown.Mid>
        <Dropdown.Bot>
          <LinkBlock to={SIGN_OUT}>Sign out</LinkBlock>
        </Dropdown.Bot>
      </Dropdown.Body>
    </Dropdown>
  );
}

ProfileDropdown.propTypes = {
  user: PropTypes.object.isRequired,
};
export default ProfileDropdown;
