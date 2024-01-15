import PropTypes from "prop-types";

function Main({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-3">{children}</div>;
}

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

Main.Body = function MainBody({ children }) {
  return <div className="border border-red-500 md:col-span-2">{children}</div>;
};

Main.Body.propTypes = {
  children: PropTypes.any.isRequired,
};

Main.Sidebar = function MainSideBar({ children }) {
  return <div className="border border-red-500">{children}</div>;
};

Main.Sidebar.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;
