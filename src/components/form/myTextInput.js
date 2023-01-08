import React from "react";
import { ErrorMessage, useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <p>{label}</p>
      <input className="full" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="error" />
    </>
  );
};

export default MyTextInput;
