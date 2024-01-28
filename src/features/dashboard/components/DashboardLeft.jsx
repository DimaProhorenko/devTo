import PropTypes from "prop-types";

import { Card } from "src/modules/common/components";
import DashboardPostsInfo from "./DashboardPostsInfo";
import DashboardCommentsInfo from "./DashboardCommentsInfo";

function DashboardLeft({ postsQuantity, commentsQuantity }) {
  return (
    <Card className="space-y-4">
      <DashboardPostsInfo quantity={postsQuantity} />
      <DashboardCommentsInfo quantity={commentsQuantity} />
    </Card>
  );
}

DashboardLeft.propTypes = {
  postsQuantity: PropTypes.number,
  commentsQuantity: PropTypes.number,
};

export default DashboardLeft;
