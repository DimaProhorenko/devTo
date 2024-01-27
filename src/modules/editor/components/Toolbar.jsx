import PropTypes from "prop-types";
import {
  BoldBtn,
  CodeBtn,
  ImageBtn,
  ItalicBtn,
  ListBtn,
  HeadingBtn,
} from "./buttons";

function Toolbar({ editor }) {
  return (
    <div className="flex flex-wrap gap-4 px-2">
      <BoldBtn editor={editor} />
      <ItalicBtn editor={editor} />
      <HeadingBtn editor={editor} />
      <ListBtn editor={editor} />
      <CodeBtn editor={editor} />
      <ImageBtn editor={editor} />
    </div>
  );
}

Toolbar.propTypes = {
  editor: PropTypes.any.isRequired,
};

export default Toolbar;
