import clsx from "clsx";
import PropTypes from "prop-types";

function Container({ children, mw = "default", className = "" }) {
  const classes = clsx({
    container: mw === "default",
    "mx-auto px-2": mw !== "default",
    "max-w-xs": mw === "xs",
    "max-w-sm": mw === "sm",
    "max-w-md": mw === "md",
    "max-w-lg": mw === "lg",
    "max-w-xl": mw === "xl",
    "max-w-2xl": mw === "2xl",
    "max-w-3xl": mw === "3xl",
    "max-w-4xl": mw === "4xl",
    "max-w-5xl": mw === "5xl",
    "max-w-6xl": mw === "6xl",
    "max-w-7xl": mw === "7xl",
    [className]: className,
  });
  return <div className={classes}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  mw: PropTypes.oneOf([
    "default",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
  ]),
};
export default Container;
