import PropTypes from "prop-types";

function EditorBtn({ children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}

EditorBtn.propTypes = {
  children: PropTypes.any.isRequired,
};
export default EditorBtn;
