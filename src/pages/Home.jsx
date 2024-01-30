import InfiniteScroll from "react-infinite-scroll-component";
import { useLazyFetchPostsWithPaginationQuery } from "src/api";
import PostItemList from "src/features/posts/components/PostItemList";
import useInfiniteScroll from "src/hooks/useInfiniteScroll";
import { Main, Section } from "src/modules/common/components";

function Home() {
  const { items, hasMore, next } = useInfiniteScroll(
    useLazyFetchPostsWithPaginationQuery,
  );

  return (
    <Section>
      <Main>
        <Main.SmallSide>Side</Main.SmallSide>
        <Main.Body>
          {
            <InfiniteScroll
              dataLength={items.length}
              hasMore={hasMore}
              next={next}
            >
              <PostItemList posts={items} />
            </InfiniteScroll>
          }
        </Main.Body>
        <Main.Sidebar>Sidebar</Main.Sidebar>
      </Main>
    </Section>
  );
}
export default Home;
