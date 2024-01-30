import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchPostByIdQuery, useGetUserByIdQuery } from "src/api";
import useNotification from "src/features/notifications/useNotification";
import MoreFromPostCreator from "src/features/posts/components/MoreFromPostCreator";
import PostContainer from "src/features/posts/components/PostContainer";
import PostCreator from "src/features/posts/components/PostCreator";
import PostCreatorSkeleton from "src/features/posts/components/PostCreatorSkeleton";
import PostSkeleton from "src/features/posts/components/PostSkeleton";
import { Error, Main, Section } from "src/modules/common/components";

function SinglePost() {
  const { id } = useParams();
  const { showError } = useNotification();
  const {
    data,
    isFetching: isPostFetching,
    isError,
    error,
  } = useFetchPostByIdQuery(id);
  const post = (data && data[0]) || null;
  const hasError = data?.length === 0 || isError;
  const { data: author, isFetching: isAuthorFetching } = useGetUserByIdQuery(
    post?.authorId,
    {
      // skip: isPostFetching,
      skip: isPostFetching || hasError,
    },
  );
  const isFetching = isPostFetching || isAuthorFetching;

  console.log(hasError, data);

  useEffect(() => {
    if (hasError) {
      showError("Could not load the post");
    }
  }, [hasError, showError]);

  return (
    <Section>
      <Main>
        <Main.SmallSide>Left side</Main.SmallSide>
        <Main.Body>
          {hasError && <Error />}
          {isFetching && <PostSkeleton />}
          {!isFetching && !hasError && (
            <PostContainer post={post} author={author} />
          )}
        </Main.Body>
        <Main.Sidebar>
          {isFetching && <PostCreatorSkeleton />}
          {!isFetching && !hasError && <PostCreator author={author} />}
          {!isFetching && !hasError && <MoreFromPostCreator author={author} />}
        </Main.Sidebar>
      </Main>
    </Section>
  );
}
export default SinglePost;
