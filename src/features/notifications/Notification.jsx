import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Notification({ children, id, innerRef, offset }) {
  return (
    <motion.div
      key={id}
      ref={innerRef}
      className="absolute w-52 rounded-md bg-white p-4 shadow-sm"
      initial={{
        x: "100%",
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: "100%",
        opacity: 0,
      }}
      style={{
        transform: `translateY(${offset}px)`,
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
};

export default Notification;
