import { Form, Spinner } from "src/modules/common/components";
import { object } from "yup";

import { validateEmail, validatePassword } from "src/helpers/validateInputs";
import supabase from "src/client";
import { useSignUpMutation } from "../services/authServices";

function SignupForm() {
  const [signUp, { isLoading, isError, isSuccess }] = useSignUpMutation();

  return (
    <Form
      initialsValues={{
        email: "",
        password: "",
      }}
      validationSchema={object({ ...validateEmail, ...validatePassword })}
      onSubmit={async ({ email, password }) => {
        const res = await signUp({ email, password });
        console.log(res);
      }}
    >
      <Form.Field label="Email" type="email" name="email" id="email" />
      <Form.Field
        label="Password"
        type="password"
        name="password"
        id="password"
      />
      <Form.Submit>{isLoading && <Spinner />} Signup</Form.Submit>
    </Form>
  );
}
export default SignupForm;
