import PropTypes from "prop-types";
import EditorBtn from "../EditorBtn";
import Icon from "../../../common/components/Icon";
import codeIcon from "src/assets/icons/editor/code.svg";

function CodeBtn({ editor }) {
  const handleClick = () => {
    editor.chain().focus().toggleCode().run();
  };
  return (
    <EditorBtn onClick={handleClick} isActive={editor.isActive("code")}>
      <Icon src={codeIcon} alt="toggle code" />
    </EditorBtn>
  );
}

CodeBtn.propTypes = {
  editor: PropTypes.object.isRequired,
};

export default CodeBtn;
