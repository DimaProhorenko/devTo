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
