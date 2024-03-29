import { useParams } from "react-router-dom";
import { useFetchPostByIdQuery, useGetUserByIdQuery } from "src/api";
import MoreFromPostCreator from "src/features/posts/components/MoreFromPostCreator";
import PostContainer from "src/features/posts/components/PostContainer";
import PostCreator from "src/features/posts/components/PostCreator";
import PostCreatorSkeleton from "src/features/posts/components/PostCreatorSkeleton";
import PostSkeleton from "src/features/posts/components/PostSkeleton";
import { Main, Section } from "src/modules/common/components";

function SinglePost() {
  const { id } = useParams();
  const {
    data,
    isLoading,
    isFetching: isPostFetching,
    isError,
    error,
  } = useFetchPostByIdQuery(id);
  const post = (data && data[0]) || null;
  const { data: author, isFetching: isAuthorFetching } = useGetUserByIdQuery(
    post?.authorId,
    {
      skip: isPostFetching,
    },
  );
  const isFetching = isPostFetching || isAuthorFetching;

  return (
    <Section>
      <Main>
        <Main.SmallSide>Left side</Main.SmallSide>
        <Main.Body>
          {isFetching && <PostSkeleton />}
          {!isFetching && <PostContainer post={post} author={author} />}
        </Main.Body>
        <Main.Sidebar>
          {isFetching && <PostCreatorSkeleton />}
          {!isFetching && <PostCreator author={author} />}
          {!isFetching && <MoreFromPostCreator author={author} />}
        </Main.Sidebar>
      </Main>
    </Section>
  );
}
export default SinglePost;
