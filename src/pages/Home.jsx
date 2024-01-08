import toast from "react-hot-toast/headless";

function Home() {
  return (
    <div>
      <button
        className="rounded-md border border-blue-400 px-4 py-2"
        onClick={() => {
          toast(Math.random());
        }}
      >
        ADD TOAST
      </button>
    </div>
  );
}
export default Home;
