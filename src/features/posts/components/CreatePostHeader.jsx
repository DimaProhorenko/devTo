import { Logo } from "src/modules/common/components";
import Header from "src/modules/header/components/Header";

function CreatePostHeader() {
  return (
    <Header>
      <Header.Content>
        <Header.Cell>
          <Logo />
          <Header.Location>Create Post</Header.Location>
        </Header.Cell>
      </Header.Content>
    </Header>
  );
}
export default CreatePostHeader;
