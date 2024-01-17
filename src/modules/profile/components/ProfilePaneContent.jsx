import PropTypes from "prop-types";

function ProfilePaneContent({ children }) {
  return <div className="relative z-[1] space-y-4">{children}</div>;
}

ProfilePaneContent.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProfilePaneContent;
