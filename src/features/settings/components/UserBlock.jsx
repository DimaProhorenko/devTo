import PropTypes from "prop-types";

import { Card, Form } from "src/modules/common/components";

import SettingsTitle from "./SettingsTitle";

function UserBlock({ profileImage }) {
  return (
    <Card className="space-y-4">
      <SettingsTitle>User</SettingsTitle>
      <Form.Field
        label="First Name"
        type="text"
        name="firstName"
        id="firstName"
      />
      <Form.Field label="Last Name" type="text" name="lastName" id="lastName" />
      <Form.Field label="Username" type="text" name="username" id="username" />
      <Form.FileInput
        label="Profile image"
        name="profileImage"
        defaultPreview={profileImage}
      />
    </Card>
  );
}

UserBlock.propTypes = {
  username: PropTypes.string,
  profileImage: PropTypes.any,
};

export default UserBlock;
