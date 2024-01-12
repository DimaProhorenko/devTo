import PropTypes from "prop-types";
import EditorBtn from "../EditorBtn";
import Icon from "../Icon";
import imageIcon from "src/assets/icons/editor/image.svg";
import { useCallback } from "react";

function ImageBtn({ editor }) {
  const handleAddImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);
  return (
    <EditorBtn onClick={handleAddImage}>
      <Icon src={imageIcon} alt="Upload image" />
    </EditorBtn>
  );
}

ImageBtn.propTypes = {
  editor: PropTypes.object.isRequired,
};

export default ImageBtn;
