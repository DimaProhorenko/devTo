import { useParams } from "react-router-dom";
import { useFetchPostByIdQuery } from "src/api";
import Post from "./Post";

function PostContainer() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFetchPostByIdQuery(id);
  const post = (data && data[0]) || null;
  if (!post) return null;
  return (
    <Post>
      <Post.Title>{post.title}</Post.Title>
      <Post.Tags>Tags</Post.Tags>
      <Post.Body>{post.body}</Post.Body>
    </Post>
  );
}
export default PostContainer;
