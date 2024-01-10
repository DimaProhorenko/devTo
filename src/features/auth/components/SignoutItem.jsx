import { useNavigate } from "react-router-dom";
import { useSignOutMutation } from "../services/authServices";
import { LoadingButton, Title } from "src/modules/common/components";
import useNotification from "src/features/notifications/useNotification";
import { HOME } from "src/constants/routes";

function SignoutItem() {
  const [signOut, { isLoading, isError, error }] = useSignOutMutation();
  const { showError, showSuccess } = useNotification();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    if (!isLoading && !isError) {
      showSuccess("Signed out");
      navigate(HOME);
    } else {
      showError(error);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-center">
      <Title>Are you sure you want to sign out?</Title>
      <LoadingButton isLoading={isLoading} onClick={handleSignOut}>
        Yes, sign out
      </LoadingButton>
    </div>
  );
}
export default SignoutItem;
