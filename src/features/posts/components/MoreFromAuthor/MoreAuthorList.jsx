import PropTypes from "prop-types";
import MoreAuthorItem from "./MoreAuthorItem";

function MoreAuthorList({ posts }) {
  return (
    <ul>
      {posts?.map((post) => (
        <MoreAuthorItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

MoreAuthorList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default MoreAuthorList;
