import PropTypes from "prop-types";
import { ProfileName, UsernameTag } from ".";

function ProfileNameTag({ firstName, lastName, username }) {
  if (!firstName && !lastName) {
    return <UsernameTag>{username}</UsernameTag>;
  }
  return (
    <div>
      <ProfileName>
        {firstName} {lastName}
      </ProfileName>
      <UsernameTag>{username}</UsernameTag>
    </div>
  );
}

ProfileNameTag.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
};

export default ProfileNameTag;
