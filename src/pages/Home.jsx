import toast from "react-hot-toast/headless";
import useNotification from "src/features/notifications/useNotification";

function Home() {
  const { showSuccess } = useNotification();
  return (
    <div>
      <button
        className="rounded-md border border-blue-400 px-4 py-2"
        onClick={() => {
          showSuccess(Math.random());
        }}
      >
        ADD TOAST
      </button>
    </div>
  );
}
export default Home;
