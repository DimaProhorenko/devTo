import PropTypes from "prop-types";
import { Dropdown, LinkBlock } from "src/modules/common/components";
import ProfileImage from "./ProfileImage";

import profileIcon from "src/assets/icons/profile.png";
import { HOME } from "src/constants/routes";

function ProfileDropdown({ user }) {
  const { username } = user;
  return (
    <Dropdown>
      <Dropdown.Toggler>
        <ProfileImage src={profileIcon} alt="name" />
      </Dropdown.Toggler>
      <Dropdown.Body>
        <div>
          <LinkBlock to={HOME}>@bxleinx</LinkBlock>
        </div>
      </Dropdown.Body>
    </Dropdown>
  );
}

ProfileDropdown.propTypes = {
  user: PropTypes.object.isRequired,
};
export default ProfileDropdown;
