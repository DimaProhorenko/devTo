import PropTypes from "prop-types";

function ProfileBio({ children }) {
  return <p>{children || "404 bio not found"}</p>;
}

ProfileBio.propTypes = {
  children: PropTypes.any,
};

export default ProfileBio;
