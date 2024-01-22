import clsx from "clsx";
import PropTypes from "prop-types";

function ProfileImage({
  src,
  alt,
  size = "sm",
  border = false,
  className = "",
  ...restProps
}) {
  const classes = clsx(
    "overflow-hidden rounded-full",
    {
      "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12": size === "sm",
      "h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14": size === "md",
      "h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16": size === "lg",
      "h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18": size === "xl",
      "h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32": size === "2xl",
      "h-32 w-32 md:h-36 md:w-36 lg:h-40 lg:w-40": size === "3xl",
    },
    {
      "drop-shadow-lg": !border,
    },
    {
      [className]: className,
    },
  );
  return (
    <div className={classes} {...restProps}>
      <img src={src} alt={alt} />
    </div>
  );
}

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "3xl"]),
  border: PropTypes.bool,
  className: PropTypes.string,
};
export default ProfileImage;
