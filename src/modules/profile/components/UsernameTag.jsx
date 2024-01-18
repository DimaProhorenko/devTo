import PropTypes from "prop-types";

function UsernameTag({ children }) {
  return <small className="text-stone-600">@{children}</small>;
}

UsernameTag.propTypes = {
  children: PropTypes.any.isRequired,
};

export default UsernameTag;
