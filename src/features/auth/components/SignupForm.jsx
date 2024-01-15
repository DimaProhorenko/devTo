import { Form } from "src/modules/common/components";
import { object } from "yup";

import useMutationWithRedirect from "src/hooks/useMutationWithRedirect";

import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "src/helpers/validateInputs";
import { useSignUpMutation } from "../services/authServices";
import { HOME } from "src/constants/routes";

function SignupForm() {
  const [signUp, { isLoading }] = useMutationWithRedirect(
    useSignUpMutation,
    "Signed up",
    HOME,
  );

  return (
    <Form
      initialsValues={{
        email: "",
        password: "",
        username: "",
      }}
      validationSchema={object({
        ...validateEmail,
        ...validatePassword,
        ...validateUsername,
      })}
      onSubmit={async ({ email, password, username }) => {
        const res = await signUp({ email, password, username });
      }}
    >
      <Form.Field label="Username" type="text" name="username" id="username" />
      <Form.Field label="Email" type="email" name="email" id="email" />
      <Form.Field
        label="Password"
        type="password"
        name="password"
        id="password"
      />
      <Form.Submit isLoading={isLoading}>Signup</Form.Submit>
    </Form>
  );
}
export default SignupForm;
