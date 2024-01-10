import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <AnimatePresence>
      <div className="relative">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { isOpen, toggleOpen });
          }
          return child;
        })}
      </div>
    </AnimatePresence>
  );
}

Dropdown.propTypes = {
  children: PropTypes.any.isRequired,
};

Dropdown.Toggler = function DropdownToggler({ children, toggleOpen }) {
  return <button onClick={toggleOpen}>{children}</button>;
};

Dropdown.Toggler.propTypes = {
  children: PropTypes.any.isRequired,
  toggleOpen: PropTypes.func,
};

Dropdown.Body = function DropdownBody({ children, isOpen }) {
  return isOpen ? (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="absolute right-0 top-full
  w-max border border-stone-200 bg-white p-2"
    >
      {children}
    </motion.div>
  ) : null;
};

Dropdown.Body.propTypes = {
  children: PropTypes.any.isRequired,
  isOpen: PropTypes.bool,
};

Dropdown.Top = function DropdownTop({ children }) {
  return <div className="">{children}</div>;
};

Dropdown.Top.propTypes = {
  children: PropTypes.any.isRequired,
};

Dropdown.Mid = function DropdownMid({ children }) {
  return (
    <div className="border-b border-t border-stone-300 py-2">{children}</div>
  );
};

Dropdown.Mid.propTypes = {
  children: PropTypes.any.isRequired,
};

Dropdown.Bot = function DropdownBot({ children }) {
  return <div>{children}</div>;
};

Dropdown.Bot.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Dropdown;
