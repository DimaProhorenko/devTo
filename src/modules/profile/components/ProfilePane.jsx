import PropTypes from "prop-types";
import { Card } from "src/modules/common/components";

function ProfilePane({ children }) {
  return (
    <Card className="relative before:absolute before:left-0 before:top-0 before:block before:h-5 before:w-full">
      {children}
    </Card>
  );
}

ProfilePane.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProfilePane;
