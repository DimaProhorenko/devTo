import PropTypes from "prop-types";

import IconText from "src/modules/common/components/IconText";
import commentIcon from "src/assets/icons/comment.svg";

function DashboardCommentsInfo({ quantity }) {
  return (
    <IconText src={commentIcon} alt="Comments">
      {quantity}comments written
    </IconText>
  );
}

DashboardCommentsInfo.propTypes = {
  quantity: PropTypes.number,
};

export default DashboardCommentsInfo;
