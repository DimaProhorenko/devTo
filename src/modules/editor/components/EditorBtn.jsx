import clsx from "clsx";
import PropTypes from "prop-types";

function EditorBtn({
  children,
  isActive = false,
  className = "",
  ...restProps
}) {
  const classes = clsx(
    "outline-none p-1 border border-transparent rounded-md hover:border-primary-200 focus:border-primary-600 transition-colors",
    {
      "bg-primary-100": isActive,
      [className]: className,
    },
  );
  return (
    <button type="button" className={classes} {...restProps}>
      {children}
    </button>
  );
}

EditorBtn.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};
export default EditorBtn;
