import PropTypes from "prop-types";
import { Dropdown, LinkBlock } from "src/modules/common/components";
import ProfileImage from "./ProfileImage";

import profileIcon from "src/assets/icons/profile.png";
import { HOME, SIGN_OUT } from "src/constants/routes";
import { ProfileNameTag, ProfileNav } from ".";

function ProfileDropdown({ user }) {
  const {
    username,
    first_name: firstName,
    last_name: lastName,
    profile_image: profileImage,
  } = user;
  return (
    <Dropdown>
      <Dropdown.Toggler>
        <ProfileImage src={profileImage} alt={username} />
      </Dropdown.Toggler>
      <Dropdown.Body>
        <Dropdown.Top>
          <LinkBlock to={HOME}>
            <ProfileNameTag
              firstName={firstName}
              lastName={lastName}
              username={username}
            />
          </LinkBlock>
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
