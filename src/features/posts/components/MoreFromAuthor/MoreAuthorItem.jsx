import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { POST } from "src/constants/routes";
import { Title } from "src/modules/common/components";

function MoreAuthorItem({ post }) {
  const { id, title } = post;
  return (
    <li>
      <Title size="xs">
        <Link to={`${POST}/${id}`}>{title}</Link>
      </Title>
    </li>
  );
}

MoreAuthorItem.propTypes = {
  post: PropTypes.object,
  id: PropTypes.any,
  title: PropTypes.string,
};

export default MoreAuthorItem;
