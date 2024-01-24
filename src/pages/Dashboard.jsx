import { useSelector } from "react-redux";

import { useFetchPostsByAuthorIdQuery } from "src/api";
import DashboardBody from "src/features/dashboard/components/DashboardBody";
import DashboardTop from "src/features/dashboard/components/DashboardTop";
import PostItemList from "src/features/posts/components/PostItemList";
import { getUserId } from "src/features/user/userSlice";
import { Container, Main, Title } from "src/modules/common/components";

function Dashboard() {
  const id = useSelector(getUserId);
  const { data: posts } = useFetchPostsByAuthorIdQuery(id);
  return (
    <section className="pb-4">
      <DashboardTop />
      <Container mw="4xl">
        <DashboardBody>
          <DashboardBody.Left>Sidebar</DashboardBody.Left>
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
