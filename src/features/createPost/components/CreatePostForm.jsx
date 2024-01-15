import { useSelector } from "react-redux";
import { useState } from "react";
import { object } from "yup";

import { Form } from "src/modules/common/components";
import { validatePostTitle } from "src/helpers/validateInputs";
import Editor from "src/modules/editor/components/Editor";
import { getUserId } from "src/features/user/userSlice";
import { useCreatePostMutation } from "src/api";
import useNotification from "src/features/notifications/useNotification";

function CreatePostForm() {
  const [createPost, { isLoading, isError, error }] = useCreatePostMutation();
  const { showError, showSuccess } = useNotification();
  const [text, setText] = useState("");
  const authorId = useSelector(getUserId);

  return (
    <Form
      initialsValues={{
        title: "",
      }}
      validationSchema={object({ ...validatePostTitle })}
      onSubmit={async ({ title }) => {
        const data = await createPost({
          authorId,
          title,
          body: text,
        });
        if (!isLoading && !isError) {
          console.log("POST CREATED");
          showSuccess("Post created");
        }
        if (!isLoading && isError) {
          showError(error);
        }
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
        <Editor cb={setText} />
      </Form.Group>
      <Form.Submit isLoading={isLoading}>Publish</Form.Submit>
    </Form>
  );
}
export default CreatePostForm;
