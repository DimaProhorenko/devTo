import PropTypes from "prop-types";

function Container({ children, className }) {
  return <div className={`container ${className}`}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};
export default Container;
