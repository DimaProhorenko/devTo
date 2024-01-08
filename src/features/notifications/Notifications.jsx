import { useToaster } from "react-hot-toast/headless";
import { AnimatePresence } from "framer-motion";
import Notification from "./Notification";

function Notifications() {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, updateHeight } = handlers;
  return (
    <AnimatePresence>
      <div
        className="fixed right-2 top-2 flex w-full max-w-52 flex-col gap-y-4"
        onMouseEnter={startPause}
        onMouseLeave={endPause}
      >
        {toasts.map((toast) => {
          const ref = (el) => {
            if (el && typeof toast.height !== "number") {
              const height = el.getBoundingClientRect().height;
              updateHeight(toast.id, height);
            }
          };

          return (
            <Notification innerRef={ref} key={toast.id} id={toast.id}>
              {toast.message}
            </Notification>
          );
        })}
      </div>
    </AnimatePresence>
  );
}
export default Notifications;
