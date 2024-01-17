import PropTypes from "prop-types";

function ProfileHeader({ children }) {
  return <div className="flex items-center gap-x-4">{children}</div>;
}

ProfileHeader.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProfileHeader;
