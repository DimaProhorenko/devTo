import PropTypes from "prop-types";

import postIcon from "src/assets/icons/post.svg";
import Icon from "src/modules/common/components/Icon";
import IconText from "src/modules/common/components/IconText";

function DashboardPostsInfo({ quantity }) {
  return (
    <IconText src={postIcon} alt="Posts">
      {quantity} posts published
    </IconText>
  );
}

DashboardPostsInfo.propTypes = {
  quantity: PropTypes.number,
};

export default DashboardPostsInfo;
