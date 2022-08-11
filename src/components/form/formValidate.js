import React from "react";
import { UseForm } from "../../hooks/useForm";
const initialForm={
    direction: "",
    floor: "",
    gate: "",
    aditional: "",
    nameAndLast: "",
    amountPay: "",
  };
  
  const validationsForm = (form) => {
    let errors = {};
    //expresions regulars
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexComments = /^.{1,255}$/; //of 1 to 255
    //si queremos de uno en uno, concatenamos todos en un solo if
    if (!form.direction.trim()) {
      errors.direction = "El campo 'Direccion' es requerido";
    } else if (!form.floor.trim()) {
      errors.floor = "El campo 'Piso' es requerido";
    } else if (!form.gate.trim()) {
      errors.gate = "El campo 'Puerta' es requerido";
    } else if (!form.aditional.trim()) {
      errors.aditional = "El campo 'Adicional' es requerido";
    } else if (!form.nameAndLast.trim()) {
      errors.nameAndLast = "El campo 'Nombre y apellido' es requerido";
    } else if (!form.amountPay.trim()) {
      errors.amountPay = "El campo 'Con cuanto vas a pagar' es requerido";
    }
    return errors;
  };
  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };

const formValidate = () => {

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = UseForm(initialForm, validationsForm);

  return (
   <>
    <form onSubmit={handleSubmit} className="ContainerForm">
          <h2>Detalles del envío</h2>
          <p>Dirección</p>
          <input
            placeholder="Ej:9 de Julio 2500"
            name="direction"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.direction}
          ></input>
          {errors.direction && <p style={styles}>{errors.direction}</p>}
          <p>Piso</p>
          <input
            placeholder="Ej:3"
            name="floor"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.floor}
          ></input>
          {errors.floor && <p style={styles}>{errors.floor}</p>}
          <p>Puerta</p>
          <input
            placeholder="Ej:A"
            name="gate"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.gate}
          ></input>
          {errors.gate && <p style={styles}>{errors.gate}</p>}
          <p>Indicación adicional</p>
          <input
            placeholder="Ej: Casa con rejas verdes"
            name="aditional"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.aditional}
          ></input>
          {errors.aditional && <p style={styles}>{errors.aditional}</p>}
          <p>Nombre y apellido</p>
          <input
            placeholder="Ej: Juan perez"
            name="nameAndLast"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.nameAndLast}
          ></input>
          {errors.nameAndLast && <p style={styles}>{errors.nameAndLast}</p>}
          <p>¿Con cuanto vas a pagar?</p>
          <input
            placeholder="Ej: $400"
            name="amountPay"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.amountPay}
          ></input>
          {errors.amountPay && <p style={styles}>{errors.amountPay}</p>}
          <br />
          <br />
          <button>Guardar</button>
        </form>
   </>

  );
};

export default formValidate;