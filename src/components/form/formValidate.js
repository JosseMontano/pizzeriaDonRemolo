import React, { useContext, useEffect, useState } from "react";

import { UseForm } from "../../hooks/useForm";

const initialForm = {
  direction: "",
  floor: "",
  gate: "",
  aditional: "",
  nameAndLast: "",
  amountPay: "",
};

const validationsForm = (form, amountToPay) => {
  let errors = {};
  //expresions regulars
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexComments = /^.{1,255}$/; //of 1 to 255
  //si queremos de uno en uno, concatenamos todos en un solo if
  if (!form.nameAndLast.trim()) {
    errors.nameAndLast = "El campo 'Nombre y apellido' es requerido";
  } else if (!regexName.test(form.nameAndLast.trim())) {
    errors.nameAndLast =
      "El campo 'Nombre y apellido' sólo acepta letras y espacios en blanco";
  }
  if (!form.direction.trim()) {
    errors.direction = "El campo 'Direccion' es requerido";
  }
  if (!form.aditional.trim()) {
    errors.aditional = "El campo 'Adicional' es requerido";
  }
  if (!form.amountPay.trim()) {
    errors.amountPay =
      "El campo 'Con cuanto vas a pagar' es requerido y solo acepta numeros";
  }
  if (isNaN(form.amountPay)) {
    errors.amountPay = "El campo 'Con cuanto vas a pagar' solo acepta numeros";
  }
  if (form.amountPay < amountToPay) {
    errors.amountPay =
      "El campo 'Con cuanto vas a pagar' tiene que ser mayor al precio a pagar";
  }
  if (isNaN(form.floor)) {
    errors.floor = "El campo 'Piso' solo acepta numeros";
  }
  if (form.floor < 0 || form.floor > 100) {
    errors.floor = "El campo 'Piso' solo acepta valores entre 1 y 99";
  }
  return errors;
};
let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const FormValidate = ({ totalSta }) => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = UseForm(initialForm, validationsForm, totalSta);

  return (
    <>
      <form onSubmit={handleSubmit} className="ContainerForm">
        <h2>Detalles del envío</h2>
        <div className="p1-detalle">
        <div>
        <p>Dirección</p>
        <input
          placeholder="Ej:9 de Julio 2500"
          name="direction"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.direction}
        ></input>
        {errors.direction && <p style={styles}>{errors.direction}</p>}
        </div>
        <div>
        <p>Piso</p>
        <input className="piso-dir"
          placeholder="Ej:3"
          name="floor"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.floor}
        ></input>
        {errors.floor && <p style={styles}>{errors.floor}</p>}
        </div>
        <div>
        <p>Puerta</p>
        <input className="puerta-dir"
          placeholder="Ej:A"
          name="gate"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.gate}
        ></input>
        {errors.gate && <p style={styles}>{errors.gate}</p>}
        </div>
        </div>

        <p>Indicación adicional</p>
        <input class="w-full"
          placeholder="Ej: Casa con rejas verdes"
          name="aditional"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.aditional}
        ></input>
        {errors.aditional && <p style={styles}>{errors.aditional}</p>}
        <br/>
        <p>Nombre y apellido</p>
        <input className="w-full"
          placeholder="Ej: Juan perez"
          name="nameAndLast"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.nameAndLast}
        ></input>
        {errors.nameAndLast && <p style={styles}>{errors.nameAndLast}</p>}
        <p>¿Con cuanto vas a pagar?</p>
        <input class="w-full"
          placeholder="Ej: $400"
          name="amountPay"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.amountPay}
        ></input>
        {errors.amountPay && <p style={styles}>{errors.amountPay}</p>}
        <br />
        <button>Guardar</button>
      </form>
    </>
  );
};

export default FormValidate;
