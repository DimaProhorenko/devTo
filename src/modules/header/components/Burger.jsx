import burgerIcon from "src/assets/icons/burger.svg";
function Burger({ ...restProps }) {
  return (
    <button {...restProps} className="flex h-7 w-7 items-center justify-center">
      <img src={burgerIcon} alt="Open Menu" />
    </button>
  );
}
export default Burger;
