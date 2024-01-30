import PropTypes from "prop-types";
import { Title } from ".";

function Error({ children }) {
  return <Title size="xl">{children || "Something went wrong"}</Title>;
}

Error.propTypes = {
  children: PropTypes.any,
};

export default Error;
