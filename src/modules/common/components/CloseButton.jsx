import closeIcon from "src/assets/icons/close.svg";

function CloseButton({ ...restProps }) {
  return (
    <button {...restProps} className="block w-10 cursor-pointer">
      <img src={closeIcon} alt="close" className="w-full" />
    </button>
  );
}
export default CloseButton;
