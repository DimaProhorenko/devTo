import toast from "react-hot-toast/headless";
import useNotification from "src/features/notifications/useNotification";
import { Section } from "src/modules/common/components";

function Home() {
  const { showSuccess } = useNotification();
  return (
    <Section>
      <button
        className="rounded-md border border-blue-400 px-4 py-2"
        onClick={() => {
          showSuccess(Math.random());
        }}
      >
        ADD TOAST
      </button>
    </Section>
  );
}
export default Home;
