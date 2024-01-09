import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LinkBlock({ children, to, className = "" }) {
  return (
    <Link
      to={to}
      className={`inline-block rounded-md bg-transparent px-4 py-2 hover:bg-primary-50 hover:text-primary-700 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}

LinkBlock.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkBlock;
