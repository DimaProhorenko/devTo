import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Post from "./Post";

function PostSkeleton() {
  return (
    <Post>
      <Post.Title>{<Skeleton />}</Post.Title>
      <Post.Tags>
        <Skeleton />
      </Post.Tags>
      <Post.Body>{<Skeleton count={15} />}</Post.Body>
    </Post>
  );
}
export default PostSkeleton;
