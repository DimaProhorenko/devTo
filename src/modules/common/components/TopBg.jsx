import clsx from "clsx";
import PropTypes from "prop-types";

function TopBg({ children, color, bgHeight = "" }) {
  return (
    <div className="relative">
      <TopBg.Color color={color} bgHeight={bgHeight} />
      <TopBg.Pane>{children}</TopBg.Pane>
    </div>
  );
}

TopBg.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  bgHeight: PropTypes.string,
};

TopBg.Color = function TopBgColor({ color, bgHeight }) {
  const classes = clsx("block w-full", {
    [bgHeight]: bgHeight,
    "h-1/6 max-h-14": !bgHeight,
  });
  return <div className={classes} style={{ backgroundColor: color }}></div>;
};

TopBg.Color.propTypes = {
  color: PropTypes.string,
  bgHeight: PropTypes.string,
};

TopBg.Pane = function TopBgPane({ children }) {
  return <div className="relative -translate-y-6">{children}</div>;
};

TopBg.Pane.propTypes = {
  children: PropTypes.any.isRequired,
};

export default TopBg;
