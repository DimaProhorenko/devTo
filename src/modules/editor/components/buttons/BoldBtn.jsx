import PropTypes from "prop-types";
import EditorBtn from "../EditorBtn";
import Icon from "../Icon";

import boldIcon from "src/assets/icons/editor/bold.svg";

function BoldBtn({ editor }) {
  const handleClick = () => {
    editor.chain().focus().toggleBold().run();
  };
  return (
    <EditorBtn onClick={handleClick} isActive={editor.isActive("bold")}>
      <Icon src={boldIcon} alt="Toggle bold" />
    </EditorBtn>
  );
}

BoldBtn.propTypes = {
  editor: PropTypes.any.isRequired,
};
export default BoldBtn;
