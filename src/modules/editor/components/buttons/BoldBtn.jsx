import PropTypes from "prop-types";
import EditorBtn from "../EditorBtn";

function BoldBtn({ editor }) {
  const handleClick = () => {
    editor.chain().focus().toggleBold().run();
  };
  return <EditorBtn onClick={handleClick}>B</EditorBtn>;
}

BoldBtn.propTypes = {
  editor: PropTypes.any.isRequired,
};
export default BoldBtn;
