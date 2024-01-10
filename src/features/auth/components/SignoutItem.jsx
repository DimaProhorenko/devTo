import { Button, Title } from "src/modules/common/components";
import { useSignOutMutation } from "../services/authServices";

function SignoutItem() {
  const [signOut] = useSignOutMutation();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-center">
      <Title>Are you sure you want to sign out?</Title>
      <Button onClick={signOut}>Yes, sign out</Button>
    </div>
  );
}
export default SignoutItem;
