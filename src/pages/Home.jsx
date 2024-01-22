import { useFetchPostsQuery } from "src/api";
import PostItemList from "src/features/posts/components/PostItemList";
import { Main, Section } from "src/modules/common/components";

function Home() {
  const { data: posts, isFetching } = useFetchPostsQuery();
  return (
    <Section>
      <Main>
        <Main.SmallSide>Side</Main.SmallSide>
        <Main.Body>{!isFetching && <PostItemList posts={posts} />}</Main.Body>
        <Main.Sidebar>Sidebar</Main.Sidebar>
      </Main>
    </Section>
  );
}
export default Home;
