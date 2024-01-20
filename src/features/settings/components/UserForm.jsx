import { object } from "yup";
import PropTypes from "prop-types";

import { Card, Form } from "src/modules/common/components";
import {
  validateFirstName,
  validateLastName,
} from "src/helpers/validateInputs";

function UserForm({ username }) {
  return (
    <Card>
      <Form
        initialsValues={{
          firstName: "",
          lastName: "",
          username: "",
        }}
        validationSchema={object({
          ...validateFirstName,
          ...validateLastName,
        })}
      >
        <Form.Field
          label="First Name"
          type="text"
          name="firstName"
          id="firstName"
        />
        <Form.Field
          label="Last Name"
          type="text"
          name="lastName"
          id="lastName"
        />
      </Form>
    </Card>
  );
}

UserForm.propTypes = {
  username: PropTypes.string,
};

export default UserForm;
