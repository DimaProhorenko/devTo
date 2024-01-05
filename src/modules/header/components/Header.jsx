import PropTypes from "prop-types";
import { Logo } from "../../common/components";

function Header({ children }) {
  return (
    <header className="py-4">
      <div className="container">{children}</div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

Header.Content = function HeaderContent({ children }) {
  return <div className="flex items-center justify-between">{children}</div>;
};

Header.Content.propTypes = {
  children: PropTypes.any.isRequired,
};

Header.Cell = function HeaderCell({ children, className = "" }) {
  return <div className={className}>{children}</div>;
};

Header.Cell.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default Header;
