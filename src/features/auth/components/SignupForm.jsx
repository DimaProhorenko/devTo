import { Form } from "src/modules/common/components";
import { object } from "yup";

import { validateEmail, validatePassword } from "src/helpers/validateInputs";

function SignupForm() {
  return (
    <Form
      initialsValues={{
        email: "",
        password: "",
      }}
      validationSchema={object({ ...validateEmail, ...validatePassword })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form.Field label="Email" type="email" name="email" id="email" />
      <Form.Field
        label="Password"
        type="password"
        name="password"
        id="password"
      />
      <Form.Submit>Signup</Form.Submit>
    </Form>
  );
}
export default SignupForm;
