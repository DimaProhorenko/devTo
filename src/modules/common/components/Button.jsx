import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({
  children,
  to,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...restProps
}) {
  const c = clsx(
    "block font-medium transition-colors rounded-md",
    {
      "opacity-50 cursor-not-allowed": disabled,
    },
    {
      "border-primary-500 hover:bg-primary-500 block border text-primary-500 hover:text-white":
        variant === "primary",
    },
    {
      "border border-transparent bg-primary-500 text-white hover:bg-transparent hover:border-primary-500 hover:text-primary-500":
        variant === "primary-bg",
    },
    {
      "bg-stone-200 hover:bg-primary-100 text-black hover:text-primary-500":
        variant === "gray",
    },
    {
      "px-4 py-2": size === "md",
    },
    {
      "px-2 py-2": size === "square",
    },
    {
      "w-full py-2": size === "full",
    },
    {
      [className]: className,
    },
  );

  return to ? (
    <Link className={c} to={to} {...restProps}>
      {children}
    </Link>
  ) : (
    <button className={c} {...restProps} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "primary-bg", "gray"]),
  size: PropTypes.oneOf(["md", "square", "full"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
