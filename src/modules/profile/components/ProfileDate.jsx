import PropTypes from "prop-types";

function ProfileDate({ children }) {
  return <p className="text-stone-400">Joined on {children}</p>;
}

ProfileDate.propTypes = {
  children: PropTypes.any,
};

export default ProfileDate;
