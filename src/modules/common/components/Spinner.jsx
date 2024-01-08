import clsx from "clsx";
import PropTypes from "prop-types";

function Spinner({ size = "md", variant = "white" }) {
  const classes = clsx(
    "spinner border-dotted",
    {
      "w-5 h-5 border-2": size === "sm",
      "w-7 h-7 border-4": size === "md",
      "w-12 h-12 border-8": size === "lg",
    },
    {
      "border-white": variant === "white",
    },
  );
  return <span className={classes}></span>;
}

Spinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["white"]),
};

export default Spinner;
