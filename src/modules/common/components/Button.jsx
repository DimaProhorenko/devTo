import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <button className="text-primary-500 block font-medium">{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Button;
