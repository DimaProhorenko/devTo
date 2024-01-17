import PropTypes from "prop-types";

function ProfileName({ children }) {
  return (
    <h4 className="text-md font-medium text-stone-800 md:text-lg">
      {children}
    </h4>
  );
}

ProfileName.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProfileName;
