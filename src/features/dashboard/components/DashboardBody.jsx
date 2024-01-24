import PropTypes from "prop-types";

function DashboardBody({ children }) {
  return <div className="gap-x-4 md:flex">{children}</div>;
}

DashboardBody.propTypes = {
  children: PropTypes.any,
};

DashboardBody.Left = function DashboardBodyLeft({ children }) {
  return <div className="md:w-1/3">{children}</div>;
};

DashboardBody.Left.propTypes = {
  children: PropTypes.any,
};

DashboardBody.Content = function DashboardBodyContent({ children }) {
  return <div className="flex-1">{children}</div>;
};

DashboardBody.Content.propTypes = {
  children: PropTypes.any,
};

export default DashboardBody;
