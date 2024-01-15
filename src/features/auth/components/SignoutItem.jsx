import useMutationWithRedirect from "src/hooks/useMutationWithRedirect";

import { useSignOutMutation } from "../services/authServices";

import { LoadingButton, Title } from "src/modules/common/components";
import { HOME } from "src/constants/routes";

function SignoutItem() {
  const [signOut, { isLoading }] = useMutationWithRedirect(
    useSignOutMutation,
    "Signed out",
    HOME,
  );

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-center">
      <Title>Are you sure you want to sign out?</Title>
      <LoadingButton isLoading={isLoading} onClick={signOut}>
        Yes, sign out
      </LoadingButton>
    </div>
  );
}
export default SignoutItem;
