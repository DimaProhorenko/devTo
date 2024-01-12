import PropTypes from "prop-types";
import { BoldBtn, CodeBtn, ItalicBtn, ListBtn } from "./buttons";

function Toolbar({ editor }) {
  return (
    <div className="px-2">
      <BoldBtn editor={editor} />
      <ItalicBtn editor={editor} />
      <ListBtn editor={editor} />
      <CodeBtn editor={editor} />
    </div>
  );
}

Toolbar.propTypes = {
  editor: PropTypes.any.isRequired,
};

export default Toolbar;
