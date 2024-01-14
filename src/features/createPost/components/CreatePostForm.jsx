import { useState } from "react";
import { object } from "yup";

import { Form } from "src/modules/common/components";
import { validatePostTitle } from "src/helpers/validateInputs";
import Editor from "src/modules/editor/components/Editor";
import supabase from "src/client";

function CreatePostForm() {
  const [text, setText] = useState("");

  const handleSavePost = async (title) => {
    const res = await supabase.from("posts").insert([
      {
        authorId: 123456,
        title,
        body: text,
      },
    ]);
  };

  return (
    <Form
      initialsValues={{
        title: "",
      }}
      validationSchema={object({ ...validatePostTitle })}
      onSubmit={(values) => {
        handleSavePost(values.title);
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
      <Form.Submit>Publish</Form.Submit>
    </Form>
  );
}
export default CreatePostForm;
