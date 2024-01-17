import { useParams } from "react-router-dom";
import { useFetchPostByIdQuery, useGetUserByIdQuery } from "src/api";
import PostContainer from "src/features/posts/components/PostContainer";
import PostCreator from "src/features/posts/components/PostCreator";
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
  // console.log(author);
  // console.log(post);

  if (isPostFetching || isAuthorFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <Section>
      <Main>
        <Main.SmallSide>Left side</Main.SmallSide>
        <Main.Body>
          <PostContainer post={post} author={author} />
        </Main.Body>
        <Main.Sidebar>
          <PostCreator />
        </Main.Sidebar>
      </Main>
    </Section>
  );
}
export default SinglePost;
