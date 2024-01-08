import LoginForm from "src/features/auth/components/LoginForm";
import { Container, Title } from "src/modules/common/components";

function Login() {
  return (
    <Container>
      <Title>Log in to your account</Title>
      <LoginForm />
    </Container>
  );
}
export default Login;
