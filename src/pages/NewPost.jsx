import CreatePostForm from "src/features/createPost/components/CreatePostForm";
import CreatePostHeader from "src/features/createPost/components/CreatePostHeader";
import { Container, Section } from "src/modules/common/components";

function NewPost() {
  return (
    <>
      <CreatePostHeader />
      <Section container={false}>
        <Container mw="xl">
          <CreatePostForm />
        </Container>
      </Section>
    </>
  );
}
export default NewPost;
