import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

import {
  useFetchPostsByAuthorIdQuery,
  useLazyFetchPostsByAuthorIdQuery,
} from "src/api";
import DashboardBody from "src/features/dashboard/components/DashboardBody";
import DashboardLeft from "src/features/dashboard/components/DashboardLeft";
import DashboardTop from "src/features/dashboard/components/DashboardTop";
import PostItemList from "src/features/posts/components/PostItemList";
import { getUserId } from "src/features/user/userSlice";
import useInfiniteScroll from "src/hooks/useInfiniteScroll";
import { Container, Title } from "src/modules/common/components";

function Dashboard() {
  const id = useSelector(getUserId);
  const { data: posts } = useFetchPostsByAuthorIdQuery(id);
  // const {
  //   items: posts,
  //   hasMore,
  //   next,
  // } = useInfiniteScroll(useLazyFetchPostsByAuthorIdQuery);

  console.log(posts);

  const postsQuantity = posts?.length;
  return (
    <section className="pb-4">
      <DashboardTop />
      <Container mw="4xl">
        <DashboardBody>
          <DashboardBody.Left>
            <DashboardLeft postsQuantity={postsQuantity} commentsQuantity={0} />
          </DashboardBody.Left>
          <DashboardBody.Content>
            <Title>Your posts</Title>
            {posts && <PostItemList posts={posts} />}
          </DashboardBody.Content>
        </DashboardBody>
      </Container>
    </section>
  );
}
export default Dashboard;
