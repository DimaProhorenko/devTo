import { Link } from "react-router-dom";
import { SIGN_UP } from "src/constants/routes";
import LoginForm from "src/features/auth/components/LoginForm";
import { Container, Title } from "src/modules/common/components";

function Login() {
  return (
    <Container mw="md">
      <Title>Log in to your account</Title>
      <LoginForm />
      <Link to={SIGN_UP} className="mt-4 block">
        Don&apos;t have an accout?{" "}
        <span className="underline">Create account</span>
      </Link>
    </Container>
  );
}
export default Login;
