import PropTypes from "prop-types";
import { Dropdown, LinkBlock } from "src/modules/common/components";
import ProfileImage from "./ProfileImage";

import profileIcon from "src/assets/icons/profile.png";
import {
  CREATE_POST,
  DASHBOARD,
  HOME,
  SAVED_POSTS,
  SIGN_OUT,
} from "src/constants/routes";

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
          <ul>
            <li>
              <LinkBlock to={DASHBOARD}>Dashboard</LinkBlock>
            </li>
            <li>
              <LinkBlock to={CREATE_POST}>Create Post</LinkBlock>
            </li>
            <li>
              <LinkBlock to={SAVED_POSTS}>Saved Posts</LinkBlock>
            </li>
          </ul>
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
