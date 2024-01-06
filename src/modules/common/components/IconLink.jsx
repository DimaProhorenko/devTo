import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function IconLink({ children, iconPath, to, className = "" }) {
  return (
    <Link to={to} className={`flex items-center gap-3 ${className}`}>
      <img src={iconPath} className="w-10" />
      {children}
    </Link>
  );
}

IconLink.propTypes = {
  children: PropTypes.any.isRequired,
  iconPath: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default IconLink;
