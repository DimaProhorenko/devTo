import toast from "react-hot-toast/headless";
import { Link } from "react-router-dom";
import { useFetchPostsQuery } from "src/api";
import { POST } from "src/constants/routes";
import useNotification from "src/features/notifications/useNotification";
import { Section } from "src/modules/common/components";

function Home() {
  const { showSuccess } = useNotification();
  const { data: posts, isFetching } = useFetchPostsQuery();
  console.log(posts);
  return (
    <Section>
      <button
        className="rounded-md border border-blue-400 px-4 py-2"
        onClick={() => {
          showSuccess(Math.random());
        }}
      >
        ADD TOAST
      </button>
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
