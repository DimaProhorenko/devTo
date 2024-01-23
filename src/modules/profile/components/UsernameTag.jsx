import clsx from "clsx";
import PropTypes from "prop-types";

function UsernameTag({ children, size = "sm" }) {
  const classes = clsx("text-stone-600", {
    "text-[12px]": size === "sm",
    "text-xs md:text-sm": size === "md",
    "text-base md:text-md": size === "lg",
    "text-md md:text-lg": size === "xl",
  });

  return <small className={classes}>@{children}</small>;
}

UsernameTag.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

export default UsernameTag;
