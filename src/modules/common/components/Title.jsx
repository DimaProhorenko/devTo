import clsx from "clsx";
import PropTypes from "prop-types";

function Title({ children, size = "lg", className = "" }) {
  const classes = clsx("font-bold text-stone-800 mb-4", {
    "text-sm md:text-base lg:text-lg": size === "xs",
    "text-base md:lg lg:text-xl": size === "sm",
    "text-lg md:text-xl lg:text-2xl": size === "md",
    "text-2xl md:text-3xl lg:text-4xl": size === "lg",
    "text-3xl md:text-4xl lg:text-5xl": size === "xl",
    "text-4xl md:text-5xl lg:text-6xl": size === "2xl",
    [className]: className,
  });
  return <h2 className={classes}>{children}</h2>;
}

Title.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default Title;
