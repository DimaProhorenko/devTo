import PropTypes from "prop-types";

function MobileMenu({ children }) {
  return <div>{children}</div>;
}

MobileMenu.propTypes = {
  children: PropTypes.any.isRequired,
};

MobileMenu.Nav = function MobileMenuNav({ children }) {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

MobileMenu.Nav.propTypes = {
  children: PropTypes.any.isRequired,
};

MobileMenu.Item = function MobileMenuItem({ children }) {
  return <li>{children}</li>;
};

MobileMenu.Item.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MobileMenu;
