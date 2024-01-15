import Post from "src/features/posts/components/Post";
import { Container, Main } from "src/modules/common/components";

function SinglePost() {
  return (
    <Container>
      <Main>
        <Main.Body>
          <Post />
        </Main.Body>
        <Main.Sidebar>
          <h1>Sidebar</h1>
        </Main.Sidebar>
      </Main>
    </Container>
  );
}
export default SinglePost;
