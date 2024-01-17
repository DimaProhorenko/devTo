import PropTypes from "prop-types";
import Post from "./Post";

function PostContainer({ post, author }) {
  if (!post) return null;
  console.log(author);
  return (
    <Post>
      <Post.Author author={author} createdAt={post.created_at} />
      <Post.Title>{post.title}</Post.Title>
      <Post.Tags>Tags</Post.Tags>
      <Post.Body>{post.body}</Post.Body>
    </Post>
  );
}

PostContainer.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default PostContainer;
