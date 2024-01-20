import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

function UserTag({ children }) {
  return (
    <h2 className="text-2xl font-bold text-primary-500 md:text-3xl lg:text-4xl">
      {children ? `@${children}` : <Skeleton />}
    </h2>
  );
}

UserTag.propTypes = {
  children: PropTypes.any,
};

export default UserTag;
