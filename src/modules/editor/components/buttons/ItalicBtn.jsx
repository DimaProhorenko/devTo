import PropTypes from "prop-types";

import EditorBtn from "../EditorBtn";
import Icon from "../../../common/components/Icon";

import italicIcon from "src/assets/icons/editor/italic.svg";

function ItalicBtn({ editor }) {
  const handleClick = () => {
    editor.chain().focus().toggleItalic().run();
  };
  return (
    <EditorBtn onClick={handleClick} isActive={editor.isActive("italic")}>
      <Icon src={italicIcon} alt="Toggle italic" />
    </EditorBtn>
  );
}

ItalicBtn.propTypes = {
  editor: PropTypes.object.isRequired,
};

export default ItalicBtn;
