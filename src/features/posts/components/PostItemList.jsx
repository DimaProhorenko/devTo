import PropTypes from "prop-types";
import PostItem from "./PostItem";

function PostItemList({ posts }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

PostItemList.propTypes = {
  posts: PropTypes.array,
};

export default PostItemList;
