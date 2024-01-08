import PropTypes from "prop-types";
import { motion } from "framer-motion";
import clsx from "clsx";

function Notification({ children, id, innerRef, type = "info" }) {
  const classes = clsx("w-full, rounded-md p-4 shadow-md", {
    "bg-red-200 text-red-600": type === "error",
    "bg-blue-200 text-blue-600": type === "info",
    "bg-green-200 text-green-600": type === "success",
  });
  return (
    <motion.div
      key={id}
      ref={innerRef}
      className={classes}
      initial={{
        translateX: "100%",
        opacity: 0,
      }}
      animate={{
        translateX: 0,
        opacity: 1,
      }}
      exit={{
        translateX: "100%",
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}

Notification.propTypes = {
  children: PropTypes.any.isRequired,
  innerRef: PropTypes.any,
  offset: PropTypes.number,
  id: PropTypes.any,
  type: PropTypes.oneOf(["info", "error", "success"]),
};

export default Notification;
