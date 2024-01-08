import { Form } from "src/modules/common/components";
import { object } from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast/headless";

import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "src/helpers/validateInputs";
import { useSignUpMutation } from "../services/authServices";
import { setUser } from "src/features/user/userSlice";
import { HOME } from "src/constants/routes";

function SignupForm() {
  const [signUp, { isLoading, isError, error }] = useSignUpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isError) {
    toast(error);
  }

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
        const { data } = await signUp({ email, password, username });
        if (!isLoading && !isError) {
          const { user, session } = data;
          dispatch(setUser({ user, session }));
          navigate(HOME);
        }
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
