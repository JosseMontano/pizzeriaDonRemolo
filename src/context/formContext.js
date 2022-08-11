import { createContext, useState } from "react";

const FormContext = createContext();

const initialForm = {};

const FormProvider = ({ children }) => {
  const [formContext, setForm] = useState(initialForm);

  const handleForm = (formSend) => {
    alert('enviado');
    console.log(formSend)
    setForm(formSend)
    localStorage.setItem('formUser', JSON.stringify(formContext)) //guardar en el local
  };

  const data = { formContext, handleForm };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormProvider };
export default FormContext;