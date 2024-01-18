import PropTypes from "prop-types";

function ProfileName({ children }) {
  return (
    <h4 className="text-xs font-medium text-stone-800 md:text-sm">
      {children}
    </h4>
  );
}

ProfileName.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProfileName;
