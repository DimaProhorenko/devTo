import PropTypes from "prop-types";
import { ProfileName, UsernameTag } from ".";

function ProfileNameTag({ firstName, lastName, username, size = "sm" }) {
  if (!firstName && !lastName) {
    return <UsernameTag>{username}</UsernameTag>;
  }
  return (
    <div>
      <ProfileName size={size}>
        {firstName} {lastName}
      </ProfileName>
      <UsernameTag size={size}>{username}</UsernameTag>
    </div>
  );
}

ProfileNameTag.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

export default ProfileNameTag;
