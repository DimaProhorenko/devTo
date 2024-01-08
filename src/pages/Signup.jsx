import SignupForm from "src/features/auth/components/SignupForm";
import { Container, Title } from "src/modules/common/components";

function Signup() {
  return (
    <Container>
      <Title>Create your account</Title>
      <SignupForm />
    </Container>
  );
}
export default Signup;
