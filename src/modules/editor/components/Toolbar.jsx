import PropTypes from "prop-types";
import BoldBtn from "./buttons/BoldBtn";

function Toolbar({ editor }) {
  return (
    <div>
      <ul>
        <li>
          <BoldBtn editor={editor} />
        </li>
      </ul>
    </div>
  );
}

Toolbar.propTypes = {
  editor: PropTypes.any.isRequired,
};

export default Toolbar;
