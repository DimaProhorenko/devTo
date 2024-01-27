import PropTypes from "prop-types";

function Main({ children }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-8">
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

Main.Body = function MainBody({ children }) {
  return <div className="md:col-span-2 lg:col-span-5">{children}</div>;
};

Main.Body.propTypes = {
  children: PropTypes.any.isRequired,
};

Main.Sidebar = function MainSideBar({ children }) {
  return <div className="space-y-4 lg:col-span-2">{children}</div>;
};

Main.Sidebar.propTypes = {
  children: PropTypes.any.isRequired,
};

Main.SmallSide = function MainSmallSide({ children }) {
  return (
    <div className="order-last md:order-first md:col-span-1">{children}</div>
  );
};

Main.SmallSide.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;
