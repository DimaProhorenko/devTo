import PropTypes from "prop-types";
import { useFetchPostsByAuthorIdQuery } from "src/api";
import MoreAuthorList from "./MoreFromAuthor/MoreAuthorList";
import { Card, Title } from "src/modules/common/components";

function MoreFromPostCreator({ author }) {
  const { id, first_name, last_name } = author;
  const { data: posts } = useFetchPostsByAuthorIdQuery(id);
  console.log("Posts from author", posts);
  return (
    <Card>
      <Title size="sm">More from {`${first_name} ${last_name}`}</Title>
      <MoreAuthorList posts={posts} />
    </Card>
  );
}

MoreFromPostCreator.propTypes = {
  author: PropTypes.object,
};

export default MoreFromPostCreator;
