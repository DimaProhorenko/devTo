import { object } from "yup";

import useMutationWithRedirect from "src/hooks/useMutationWithRedirect";

import { Form } from "src/modules/common/components";
import { validateEmail, validatePassword } from "src/helpers/validateInputs";
import { useLoginMutation } from "src/api";
import { HOME } from "src/constants/routes";

function LoginForm() {
  const [login, { isLoading }] = useMutationWithRedirect(
    useLoginMutation,
    "Logged in",
    HOME,
  );

  return (
    <>
      <Form
        initialsValues={{
          email: "",
          password: "",
        }}
        validationSchema={object({ ...validateEmail, ...validatePassword })}
        onSubmit={async ({ email, password }) => {
          const res = await login({ email, password });
        }}
      >
        <Form.Field label="Email" type="email" name="email" id="email" />
        <Form.Field
          label="Password"
          type="password"
          name="password"
          id="password"
        />
        <Form.Submit isLoading={isLoading}>Login</Form.Submit>
      </Form>
    </>
  );
}
export default LoginForm;
