import { useEffect } from "react";
import { useFetchPostsQuery, useLazyFetchPostsQuery } from "src/api";
import { POSTS_PER_PAGE } from "src/constants/db";
import PostItemList from "src/features/posts/components/PostItemList";
import { getPostsFromAndTo } from "src/helpers/apiHelpers";
import usePagination from "src/hooks/usePagination";
import { Button, Main, Section } from "src/modules/common/components";

function Home() {
  // const { data: posts, isFetching } = useFetchPostsQuery();
  const [fetchPosts, { data: posts, isFetching }] = usePagination(
    POSTS_PER_PAGE,
    useLazyFetchPostsQuery,
  );
  // console.log(res);
  // const [fetchPosts, { data: posts, isFetching }] = useLazyFetchPostsQuery();
  console.log("Test data", posts);

  useEffect(() => {
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   fetchPosts({ from: 0, to: 5 });
  // }, [fetchPosts]);

  return (
    <Section>
      <Main>
        <Main.SmallSide>Side</Main.SmallSide>
        <Main.Body>
          {!isFetching && posts && <PostItemList posts={posts} />}
          <Button onClick={fetchPosts}>Fetch more</Button>
        </Main.Body>
        <Main.Sidebar>Sidebar</Main.Sidebar>
      </Main>
    </Section>
  );
}
export default Home;
