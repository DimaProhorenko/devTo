import PropTypes from "prop-types";
import EditorBtn from "../EditorBtn";
import Icon from "../../../common/components/Icon";
import listIcon from "src/assets/icons/editor/list.svg";

function ListBtn({ editor }) {
  const handleClick = () => {
    editor.chain().focus().toggleBulletList().run();
  };
  return (
    <EditorBtn onClick={handleClick} isActive={editor.isActive("bulletList")}>
      <Icon src={listIcon} alt="Toggle list" />
    </EditorBtn>
  );
}

ListBtn.propTypes = {
  editor: PropTypes.object.isRequired,
};

export default ListBtn;
