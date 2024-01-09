import { Link } from "react-router-dom";
import { LOGIN } from "src/constants/routes";
import SignupForm from "src/features/auth/components/SignupForm";
import { Container, Title } from "src/modules/common/components";

function Signup() {
  return (
    <Container mw="md">
      <Title>Create your account</Title>
      <SignupForm />
      <Link to={LOGIN} className="mt-4 block">
        Already have an account? <span className="underline">Sign in</span>
      </Link>
    </Container>
  );
}
export default Signup;
