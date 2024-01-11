import { object } from "yup";

import { Form } from "src/modules/common/components";
import { validatePostTitle } from "src/helpers/validateInputs";
import Editor from "src/modules/editor/components/Editor";

function CreatePostForm() {
  return (
    <Form
      initialsValues={{
        title: "",
      }}
      validationSchema={object({ ...validatePostTitle })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form.Group>
        <Form.Input
          type="text"
          name="title"
          id="title"
          placeholder="New post title here..."
        />
      </Form.Group>
      <Form.Group>
        <Editor />
      </Form.Group>
    </Form>
  );
}
export default CreatePostForm;
