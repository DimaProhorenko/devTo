import PropTypes from "prop-types";

import Post from "./Post";
import { useGetUserByIdQuery } from "src/api";
import { Link } from "react-router-dom";
import { POST } from "src/constants/routes";

function PostItem({ post }) {
  const { data: author, isFetching } = useGetUserByIdQuery(post.authorId);
  const { id, title, created_at } = post;

  if (isFetching) return null;

  return (
    <Post>
      <Post.Author author={author} createdAt={created_at} />
      <Post.Title size="md">
        <Link to={`${POST}/${id}`}>{title}</Link>
      </Post.Title>
      <Post.Tags />
    </Post>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};
export default PostItem;
