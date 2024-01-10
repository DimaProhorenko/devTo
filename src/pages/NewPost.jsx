import CreatePostHeader from "src/features/createPost/components/CreatePostHeader";
import { Section, Title } from "src/modules/common/components";

function NewPost() {
  return (
    <>
      <CreatePostHeader />
      <Section>
        <Title>Create new post</Title>
      </Section>
    </>
  );
}
export default NewPost;
