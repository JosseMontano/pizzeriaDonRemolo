import { createContext, useState, useEffect } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formContext, setForm] = useState({});
  const [empty, setEmpty] = useState(true);

  const handleForm = (formSend) => {
    alert("enviado");
    setForm(formSend);
    localStorage.setItem("formUser", JSON.stringify(formContext)); //guardar en el local
  };

  const getForm = () => {
    const res = JSON.parse(localStorage.getItem("formUser"));
    if (res) {
      setForm(res);
      setEmpty(false);
    }
  };

  useEffect(() => {
    getForm();
  }, []);

  const data = { formContext, handleForm, getForm, empty };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormProvider };
export default FormContext;
