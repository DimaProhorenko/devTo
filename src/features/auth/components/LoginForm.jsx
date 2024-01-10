import { object } from "yup";
import { useNavigate } from "react-router-dom";

import { Form } from "src/modules/common/components";
import { validateEmail, validatePassword } from "src/helpers/validateInputs";
import { useLoginMutation } from "../services/authServices";
import { HOME } from "src/constants/routes";
import { useEffect } from "react";
import useNotification from "src/features/notifications/useNotification";

function LoginForm() {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  const { showError, showSuccess } = useNotification();

  useEffect(() => {
    if (isError) {
      showError(error);
    }
  }, [error, isError, showError]);

  return (
    <>
      {isError && <p>{error}</p>}

      <Form
        initialsValues={{
          email: "",
          password: "",
        }}
        validationSchema={object({ ...validateEmail, ...validatePassword })}
        onSubmit={async ({ email, password }) => {
          const { data } = await login({ email, password });
          if (!isLoading && !isError) {
            // const { session, user } = data;
            showSuccess("Logged in");
            // dispatch(setUser({ session, user }));
            navigate(HOME);
          }
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
