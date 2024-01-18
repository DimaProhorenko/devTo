import { Link } from "react-router-dom";
import { useFetchPostsQuery } from "src/api";
import { POST } from "src/constants/routes";
import { Section } from "src/modules/common/components";

function Home() {
  const { data: posts, isFetching } = useFetchPostsQuery();
  console.log(posts);
  return (
    <Section>
      {!isFetching &&
        posts.map((post) => (
          <div key={post.id}>
            <Link to={`${POST}/${post.id}`}>{post.title}</Link>
          </div>
        ))}
    </Section>
  );
}
export default Home;
