import { useState } from "react";
import PropTypes from "prop-types";

import EditorBtn from "../EditorBtn";
import Icon from "../../../common/components/Icon";

import headingIcon from "src/assets/icons/editor/heading.svg";

function HeadingBtn({ editor }) {
  const [level, setLevel] = useState(0);
  const maxLevel = 3;
  console.log(editor.isActive("heading"));

  const clickHandler = () => {
    if (!editor.isActive("heading")) {
      setLevel(0);
      editor.chain().focus().setParagraph().run();
    }
    if (level === maxLevel) {
      editor.chain().focus().setParagraph().run();
      setLevel(0);
      console.log("p");
    } else {
      editor
        .chain()
        .focus()
        .toggleHeading({ level: level + 1 })
        .run();
      setLevel((prevState) => prevState + 1);
    }
  };

  return (
    <EditorBtn
      className="flex items-end"
      onClick={clickHandler}
      isActive={editor.isActive("heading")}
    >
      <Icon src={headingIcon} alt="toggle heading" />
      {(level && <span className="leading-none">{level}</span>) || ""}
    </EditorBtn>
  );
}

HeadingBtn.propTypes = {
  editor: PropTypes.object.isRequired,
};

export default HeadingBtn;
