import React, { useContext, useState } from "react";
import FormContext from "../context/formContext";

export const UseForm = (initialForm, validateForm, amountToPay) => {

    const { formContext, handleForm } = useContext(FormContext);

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSend = async (form) => {
    //handleForm(form);
    alert('enviado');
    console.log(form)
    localStorage.setItem('formUser', JSON.stringify(form)) 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form, amountToPay));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form, amountToPay));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      handleSend(form);
    } else {
      return;
    }
  };
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};