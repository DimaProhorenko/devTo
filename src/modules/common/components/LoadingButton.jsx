import PropTypes from "prop-types";
import { Button, Spinner } from ".";

function LoadingButton({ children, isLoading, ...restProps }) {
  return (
    <Button className="flex items-center gap-x-4" {...restProps}>
      {isLoading && <Spinner />}
      {children}
    </Button>
  );
}

LoadingButton.propTypes = {
  children: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default LoadingButton;
