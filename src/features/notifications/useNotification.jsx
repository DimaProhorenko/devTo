import toast from "react-hot-toast/headless";

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  const showError = (msg) => {
    toast(msg, {
      type: "error",
    });
  };

  const showInfo = (msg) => {
    toast(msg, {
      type: "info",
    });
  };

  const showSuccess = (msg) => {
    toast(msg, {
      type: "success",
    });
  };

  return { showError, showInfo, showSuccess };
};
