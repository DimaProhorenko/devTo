import { string } from "yup";

export const validateStringMinLength = (minLength, msg) => {
  return string().min(minLength, msg);
};

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

export const validatePostTitle = {
  title: string()
    .required("Field is required")
    .min(3, "Must be at least 3 chars long"),
};

export const validateFirstName = {
  firstName: validateStringMinLength(3, "Min length 3 characters").matches(
    /^[a-zA-Z]+$/,
    "Only english letters are allowed",
  ),
};

export const validateLastName = {
  lastName: validateStringMinLength(3, "Min length 3 characters").matches(
    /^[a-zA-Z]+$/,
    "Only english letters are allowed",
  ),
};

export const validateUrl = string().matches(
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  "Enter correct url!",
);
