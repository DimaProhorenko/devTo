import PropTypes from "prop-types";

function EditorBtn({ children, className = "", ...restProps }) {
  return (
    <button type="button" className={className} {...restProps}>
      {children}
    </button>
  );
}

EditorBtn.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};
export default EditorBtn;
