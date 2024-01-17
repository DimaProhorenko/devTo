import clsx from "clsx";
import PropTypes from "prop-types";

function Card({ children, padding = true, className = "" }) {
  const classes = clsx(
    "rounded-md border border-stone-300 bg-white overflow-hidden",
    {
      "p-2": padding,
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
