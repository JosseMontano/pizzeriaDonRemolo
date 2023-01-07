import React from "react";
import { UseForm } from "../../hooks/useForm";
import styled from "styled-components";

const ContainerForm = styled.form`
  width: auto;
  min-height: 453px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.05), 1px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 2rem;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.8rem;
  input {
    margin: 8px 0;
    border-bottom: 1px solid #000;
  }
  .full {
    width: 100%;
  }
`;

const Btn = styled.button`
  width: 150px;
  margin: 20px auto auto;
  padding: 10px;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  background: #e63c19;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;
const ContainerDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 2.3rem;
`;
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
  const { form, errors, loading, response, handleChange, handleSubmit } =
    UseForm(initialForm, validationsForm, totalSta);

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <h2>Detalles del envío</h2>
      <ContainerDetail>
        <div>
          <p>Dirección</p>
          <input
            placeholder="Ej:9 de Julio 2500"
            name="direction"
            onChange={handleChange}
            value={form.direction}
          ></input>
          {errors.direction && <p style={styles}>{errors.direction}</p>}
        </div>
        <div>
          <p>Piso</p>
          <Input
            placeholder="Ej:3"
            name="floor"
            onChange={handleChange}
            value={form.floor}
          ></Input>
          {errors.floor && <p style={styles}>{errors.floor}</p>}
        </div>
        <div>
          <p>Puerta</p>
          <Input
            placeholder="Ej:A"
            name="gate"
            onChange={handleChange}
            value={form.gate}
          ></Input>
          {errors.gate && <p style={styles}>{errors.gate}</p>}
        </div>
      </ContainerDetail>

      <p>Indicación adicional</p>
      <input
        className="full"
        placeholder="Ej: Casa con rejas verdes"
        name="aditional"
        onChange={handleChange}
        value={form.aditional}
      ></input>
      {errors.aditional && <p style={styles}>{errors.aditional}</p>}
      <br />
      <p>Nombre y apellido</p>
      <input
        className="full"
        placeholder="Ej: Juan perez"
        name="nameAndLast"
        onChange={handleChange}
        value={form.nameAndLast}
      ></input>
      {errors.nameAndLast && <p style={styles}>{errors.nameAndLast}</p>}
      <p>¿Con cuanto vas a pagar?</p>
      <input
        className="full"
        placeholder="Ej: $400"
        name="amountPay"
        onChange={handleChange}
        value={form.amountPay}
      ></input>
      {errors.amountPay && <p style={styles}>{errors.amountPay}</p>}
      <br />
      <Btn>Guardar</Btn>
    </ContainerForm>
  );
};

export default FormValidate;
