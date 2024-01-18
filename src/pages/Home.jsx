import { Link } from "react-router-dom";
import { useFetchPostsQuery } from "src/api";
import { POST } from "src/constants/routes";
import PostItemList from "src/features/posts/components/PostItemList";
import { Main, Section } from "src/modules/common/components";

function Home() {
  const { data: posts, isFetching } = useFetchPostsQuery();
  console.log(posts);
  return (
    <Section>
      <Main>
        <Main.SmallSide>Side</Main.SmallSide>
        <Main.Body>
          {!isFetching &&
            posts.map((post) => (
              <div key={post.id}>
                <Link to={`${POST}/${post.id}`}>{post.title}</Link>
              </div>
            ))}
          {!isFetching && <PostItemList posts={posts} />}
        </Main.Body>
        <Main.Sidebar>Sidebar</Main.Sidebar>
      </Main>
    </Section>
  );
}
export default Home;
