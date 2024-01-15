import PostContainer from "src/features/posts/components/PostContainer";
import { Main, Section } from "src/modules/common/components";

function SinglePost() {
  return (
    <Section>
      <Main>
        <Main.SmallSide>Left side</Main.SmallSide>
        <Main.Body>
          <PostContainer />
        </Main.Body>
        <Main.Sidebar>
          <h1>Sidebar</h1>
        </Main.Sidebar>
      </Main>
    </Section>
  );
}
export default SinglePost;
