import PropTypes from "prop-types";

function Dropdown({ children }) {
  return <div className="relative">{children}</div>;
}

Dropdown.propTypes = {
  children: PropTypes.any.isRequired,
};

Dropdown.Toggler = function DropdownToggler({ children }) {
  return <button>{children}</button>;
};

Dropdown.Toggler.propTypes = {
  children: PropTypes.any.isRequired,
};

Dropdown.Body = function DropdownBody({ children }) {
  return (
    <div className="absolute right-0 top-full border border-stone-200 bg-white p-2">
      {children}
    </div>
  );
};

Dropdown.Body.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Dropdown;
