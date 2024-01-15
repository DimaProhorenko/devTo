import PropTypes from "prop-types";
import { Container } from "src/modules/common/components";

function Header({ children }) {
  return (
    <header className="fixed left-0 top-0 z-20 w-full bg-white py-4 shadow">
      <Container className="container">{children}</Container>
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
  return (
    <div className={`flex items-center gap-4 ${className}`}>{children}</div>
  );
};

Header.Cell.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

Header.Location = function HeaderLocation({ children }) {
  return <span className="block font-medium capitalize">{children}</span>;
};

Header.Location.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Header;
