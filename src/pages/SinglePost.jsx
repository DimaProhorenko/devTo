import PostContainer from "src/features/posts/components/PostContainer";
import PostCreator from "src/features/posts/components/PostCreator";
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
          <PostCreator />
        </Main.Sidebar>
      </Main>
    </Section>
  );
}
export default SinglePost;
