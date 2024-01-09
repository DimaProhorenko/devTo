import PropTypes from "prop-types";
import { Dropdown } from "src/modules/common/components";
import ProfileImage from "./ProfileImage";

import profileIcon from "src/assets/icons/profile.png";

function ProfileDropdown({ user }) {
  return (
    <Dropdown>
      <Dropdown.Toggler>
        <ProfileImage src={profileIcon} alt="name" />
      </Dropdown.Toggler>
      <Dropdown.Body>
        <p>LDKSJFJSKFJLKDS</p>
        <p>LDKSJFJSKFJLKDS</p>
        <p>LDKSJFJSKFJLKDS</p>
        <p>LDKSJFJSKFJLKDS</p>
        <p>LDKSJFJSKFJLKDS</p>
        <p>LDKSJFJSKFJLKDS</p>
      </Dropdown.Body>
    </Dropdown>
  );
}

ProfileDropdown.propTypes = {
  user: PropTypes.object.isRequired,
};
export default ProfileDropdown;
