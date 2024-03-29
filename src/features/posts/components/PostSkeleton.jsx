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
      <Skeleton count={15} />
    </Post>
  );
}
export default PostSkeleton;
