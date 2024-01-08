import PropTypes from "prop-types";

function UsernameTag({ children }) {
  return <p>@{children}</p>;
}

UsernameTag.propTypes = {
  children: PropTypes.any.isRequired,
};

export default UsernameTag;
