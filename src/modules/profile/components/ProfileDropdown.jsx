import PropTypes from "prop-types";
import { Dropdown } from "src/modules/common/components";

function ProfileDropdown({ user }) {
  return (
    <Dropdown>
      <Dropdown.Toggler>@username</Dropdown.Toggler>
      <Dropdown.Body>
        <p>LDKSJFJSKFJLKDS</p>
      </Dropdown.Body>
    </Dropdown>
  );
}

ProfileDropdown.propTypes = {
  user: PropTypes.object.isRequired,
};
export default ProfileDropdown;
