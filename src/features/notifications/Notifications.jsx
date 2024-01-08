import { useToaster } from "react-hot-toast/headless";
import Notification from "./Notification";
import { AnimatePresence } from "framer-motion";

function Notifications() {
  const { toasts, handlers } = useToaster();
  console.log("TOASTS", toasts);
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;
  return (
    <AnimatePresence>
      <div
        className="fixed right-2 top-2 w-full max-w-52"
        onMouseEnter={startPause}
        onMouseLeave={endPause}
      >
        {toasts.map((toast) => {
          const offset = calculateOffset(toast, {
            reverseOrder: false,
            margin: 8,
          });
          const ref = (el) => {
            if (el && typeof toast.height !== "number") {
              const height = el.getBoundingClientRect().height;
              updateHeight(toast.id, height);
            }
          };

          return (
            <Notification
              innerRef={ref}
              offset={offset}
              key={toast.id}
              id={toast.id}
            >
              {toast.message}
            </Notification>
          );
        })}
      </div>
    </AnimatePresence>
  );
}
export default Notifications;
