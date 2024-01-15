import { object } from "yup";
import { useNavigate } from "react-router-dom";

import { Form } from "src/modules/common/components";
import { validateEmail, validatePassword } from "src/helpers/validateInputs";
import { useLoginMutation } from "../services/authServices";
import { HOME } from "src/constants/routes";
import { useEffect } from "react";
import useNotification from "src/features/notifications/useNotification";
import useMutationWithRedirect from "src/hooks/useMutationWithRedirect";

function LoginForm() {
  // const [login, { isLoading, isUninitialized, isError, error }] =
  //   useLoginMutation();
  const [login, { isLoading }] = useMutationWithRedirect(
    useLoginMutation,
    "Logged in",
    HOME,
  );
  // const navigate = useNavigate();
  // const { showError, showSuccess } = useNotification();

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
        <Form.Submit isLoading={isLoading}>Login</Form.Submit>
      </Form>
    </>
  );
}
export default LoginForm;
