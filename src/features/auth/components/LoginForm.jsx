import { object } from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Form } from "src/modules/common/components";
import { validateEmail, validatePassword } from "src/helpers/validateInputs";
import { useLoginMutation } from "../services/authServices";
import { setUser } from "src/features/user/userSlice";
import { HOME } from "src/constants/routes";
import toast from "react-hot-toast/headless";

function LoginForm() {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (isError) {
    console.log("NEW TOAST");
    toast(error);
    toast("fukc");
  }
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
            const { session, user } = data;
            dispatch(setUser({ session, user }));
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
