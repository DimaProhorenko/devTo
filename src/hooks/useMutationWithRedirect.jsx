import { useNavigate } from "react-router-dom";
import useNotification from "src/features/notifications/useNotification";

const useMutationWithRedirect = (
  mutation,
  successMsg = "",
  navigateTo = "",
) => {
  const [func, { isLoading, isError, error }] = mutation();
  const { showError, showSuccess } = useNotification();
  const navigate = useNavigate();

  async function run(options) {
    const res = await func(options);
    if (res.error) {
      showError(res.error);
    } else {
      if (successMsg) {
        console.log("Show success");
        showSuccess(successMsg);
      }
      if (navigateTo) {
        navigate(navigateTo);
      }
    }
    return res;
  }

  return [run, { isLoading, isError, error }];
};

export default useMutationWithRedirect;
