import clsx from "clsx";
import PropTypes from "prop-types";

function ProfileName({ children, size = "sm" }) {
  const classes = clsx("font-medium text-stone-800", {
    "text-xs md:text-sm": size === "sm",
    "text-base md:text-md": size === "md",
    "text-lg md:text-xl": size === "lg",
    "text-2xl md:text-3xl": size === "xl",
  });
  return <h4 className={classes}>{children}</h4>;
}

ProfileName.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

export default ProfileName;
