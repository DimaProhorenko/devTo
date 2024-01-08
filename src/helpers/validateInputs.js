import { string } from "yup";

export const validateEmail = {
  email: string().email("Email not valid").required("Field is required"),
};

export const validatePassword = {
  password: string()
    .required("Field is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
      "Minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    ),
};

export const validateUsername = {
  username: string()
    .required("Field is required")
    .matches(
      /^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
      "Minimum 6 and maximum 16 characters. Only contains alphanumeric characters, underscore and dot.",
    ),
};
