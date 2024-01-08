import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Notification({ children, id, innerRef }) {
  return (
    <motion.div
      key={id}
      ref={innerRef}
      className="w-52 rounded-md bg-white p-4 shadow-sm"
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
};

export default Notification;
