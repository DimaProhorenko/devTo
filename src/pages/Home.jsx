import { useEffect } from "react";
import { useLazyFetchPostsWithPaginationQuery } from "src/api";
import { POSTS_PER_PAGE } from "src/constants/db";
import PostItemList from "src/features/posts/components/PostItemList";
import usePagination from "src/hooks/usePagination";
import { Button, Main, Section } from "src/modules/common/components";

function Home() {
  // const { data: posts, isFetching } = useFetchPostsQuery();
  const [fetchPosts, { data: posts, isFetching }] = usePagination(
    POSTS_PER_PAGE,
    useLazyFetchPostsWithPaginationQuery,
  );

  useEffect(() => {
    console.log("Effect");
    fetchPosts();
  }, []);

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
