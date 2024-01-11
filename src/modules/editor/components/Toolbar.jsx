import PropTypes from "prop-types";
import BoldBtn from "./buttons/BoldBtn";
import ItalicBtn from "./buttons/ItalicBtn";

function Toolbar({ editor }) {
  return (
    <div className="px-2">
      <BoldBtn editor={editor} />
      <ItalicBtn editor={editor} />
    </div>
  );
}

Toolbar.propTypes = {
  editor: PropTypes.any.isRequired,
};

export default Toolbar;
