import PropTypes from "prop-types";
import { motion, easeIn } from "framer-motion";
import { IconLink } from "src/modules/common/components";

function MobileMenu({ children, innerRef }) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.3, ease: easeIn }}
      ref={innerRef}
      className="fixed left-0 top-0 h-full w-full -translate-y-full  bg-white"
    >
      <div className="container h-full">{children}</div>
    </motion.div>
  );
}

MobileMenu.propTypes = {
  children: PropTypes.any.isRequired,
  innerRef: PropTypes.any,
};

MobileMenu.Top = function MobileMenuTop({ children }) {
  return (
    <div className="flex items-center justify-between py-2">{children}</div>
  );
};

MobileMenu.Top.propTypes = {
  children: PropTypes.any.isRequired,
};

MobileMenu.TopPane = function MobileMenuTopPane({ innerRef }) {
  return (
    <div
      ref={innerRef}
      className="mobile-menu-top absolute left-0 top-0 h-2/4 w-full translate-x-5 bg-red-300"
    ></div>
  );
};

MobileMenu.TopPane.propTypes = {
  innerRef: PropTypes.any,
};

MobileMenu.BotPane = function MobileMenuBotPane({ innerRef }) {
  return (
    <div
      ref={innerRef}
      className="mobile-menu-bot absolute bottom-0 left-0 h-2/4 w-full bg-red-300"
    ></div>
  );
};

MobileMenu.BotPane.propTypes = {
  innerRef: PropTypes.any,
};

MobileMenu.Nav = function MobileMenuNav({ children }) {
  return (
    <nav className="flex h-full items-center justify-center px-4">
      <ul className="space-y-4">{children}</ul>
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

MobileMenu.Link = function MobileMenuLink({ children, to, iconPath }) {
  return (
    <IconLink
      iconPath={iconPath}
      to={to}
      className="relative py-2 text-center text-3xl font-medium before:absolute before:bottom-0 before:left-0 before:block before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-primary-500 before:transition-transform hover:text-primary-500 hover:before:scale-x-100"
    >
      {children}
    </IconLink>
  );
};

MobileMenu.Link.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
};

export default MobileMenu;
