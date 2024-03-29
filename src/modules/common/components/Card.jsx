import clsx from "clsx";
import PropTypes from "prop-types";

function Card({
  children,
  padding = true,
  overflow = "hidden",
  className = "",
}) {
  const classes = clsx(
    "rounded-md border border-stone-300 bg-white",
    {
      "p-4 md:p-3 lg:p-6": padding,
    },
    {
      "overflow-hidden": overflow === "hidden",
      "overflow-auto": overflow === "auto",
      "overflow-scroll": overflow === "scroll",
      "overflow-visible": overflow === "visible",
    },
    {
      [className]: className,
    },
  );
  return <div className={classes}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  padding: PropTypes.bool,
  overflow: PropTypes.oneOf(["hidden", "auto", "scroll", "visible"]),
};

Card.Header = function CardHeader({ children, className }) {
  const classes = clsx("py-2 border-b border-stone-200", {
    [className]: className,
  });
  return <div className={classes}>{children}</div>;
};

Card.Header.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

Card.Body = function CardBody({ children, className }) {
  const classes = clsx("", {
    [className]: className,
  });
  return <div className={classes}>{children}</div>;
};

Card.Body.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

export default Card;
