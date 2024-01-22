/* eslint-disable react/prop-types */
import { Formik, Form as FormikForm, useField } from "formik";
import PropTypes from "prop-types";
import { Spinner } from ".";
import React, { useState } from "react";

function Form({
  children,
  initialsValues,
  validationSchema,
  onSubmit,
  className = "",
}) {
  return (
    <Formik
      initialValues={initialsValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ isValid, dirty }) => {
        return (
          <FormikForm className={`space-y-6 ${className}`}>
            {React.Children.map(children, (child) => {
              if (child.type === Form.Submit) {
                return React.cloneElement(child, { isValid, dirty });
              }
              return child;
            })}
          </FormikForm>
        );
      }}
    </Formik>
  );
}

Form.propTypes = {
  children: PropTypes.any.isRequired,
  initialsValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Form.Label = function FormLabel({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-lg font-medium text-stone-800 lg:text-xl"
    >
      {children}
    </label>
  );
};

Form.Label.propTypes = {
  children: PropTypes.any.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

Form.InputM = function FormInputM({ ...restProps }) {
  return (
    <input
      className="block w-full rounded-md border border-stone-300 px-2 py-2 hover:border-primary-500  focus:outline-none focus:ring focus:ring-primary-500 focus:ring-offset-2"
      {...restProps}
    />
  );
};

Form.Input = function FormInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        className="block w-full rounded-md border border-stone-300 px-2 py-2 hover:border-primary-500  focus:outline-none focus:ring focus:ring-primary-500 focus:ring-offset-2"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <Form.Error>{meta.error}</Form.Error>}
    </>
  );
};

Form.FileInput = function FormFileInput({ label, defaultPreview, ...props }) {
  const [previewImg, setPreviewImg] = useState(defaultPreview);
  const [_, meta, helpers] = useField("file");
  return (
    <div className="flex gap-x-4">
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <img src={previewImg} />
      </div>
      <div className="flex-1 space-y-2">
        <Form.Label htmlFor={props.name || props.id}>{label}</Form.Label>
        <Form.InputM
          type="file"
          accept="image/png, image/svg, image/jpeg"
          onChange={(e) => {
            const file = e.currentTarget.files[0];
            const url = URL.createObjectURL(file);
            setPreviewImg(url);
            helpers.setValue(e.currentTarget.files[0]);
          }}
        />
        {/* <Form.Field
          label={label}
          type="file"
          accepts="image/png, svg"
          {...props}
        /> */}
      </div>
    </div>
  );
};

Form.FileInput.propTypes = {
  label: PropTypes.string.isRequired,
};

Form.TextArea = function FormTextArea({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <Form.Label htmlFor={props.name || props.id}>{label}</Form.Label>
      <textarea
        className="block w-full rounded-md border border-stone-300 px-2 py-2 hover:border-primary-500  focus:outline-none focus:ring focus:ring-primary-500 focus:ring-offset-2"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <Form.Error>{meta.error}</Form.Error>}
    </div>
  );
};

Form.TextArea.propTypes = {
  label: PropTypes.string.isRequired,
};

Form.Error = function FormError({ children }) {
  return <small className="block text-sm text-red-500">{children}</small>;
};

Form.Error.propTypes = {
  children: PropTypes.any.isRequired,
};

Form.Field = function FormField({ label, ...props }) {
  // const [field, meta] = useField(props);
  return (
    <div className="space-y-3">
      <Form.Label htmlFor={props.name || props.id}>{label}</Form.Label>
      <Form.Input {...props} />
      {/* {meta.touched && meta.error && <Form.Error>{meta.error}</Form.Error>} */}
    </div>
  );
};

Form.Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Form.Group = function FormGroup({ children }) {
  return <div className="">{children}</div>;
};

Form.Group.propTypes = {
  children: PropTypes.any.isRequired,
};

Form.Submit = function FormSubmit({
  children,
  isValid,
  dirty,
  isLoading,
  className = "",
}) {
  console.log(isValid, dirty, isValid && dirty);
  return (
    <button
      type="submit"
      className={`flex cursor-pointer items-center justify-center gap-x-4 rounded-md bg-primary-500 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-30 ${className}`}
      disabled={!(isValid && dirty)}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};

Form.Submit.propTypes = {
  children: PropTypes.any.isRequired,
  isValid: PropTypes.bool,
  dirty: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};

export default Form;
