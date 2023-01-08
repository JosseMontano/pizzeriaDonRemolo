import React from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "./myTextInput";

const ContainerForm = styled.div`
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
  form .error {
    font-weight: bold;
    color: #dc3545;
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

const FormValidate = ({ totalSta }) => {
  const requiredText = "Este campo es obligatiorio";
  const obligatedNumber = "Este campo es de tipo numero";

  return (
    <ContainerForm>
      <Formik
        validateOnChange={false} //comment in production
        initialValues={{
          direction: "",
          floor: "",
          gate: "",
          aditional: "",
          nameAndLast: "",
          amountPay: "",
        }}
        validationSchema={Yup.object({
          direction: Yup.string().required(requiredText),
          floor: Yup.number().required(requiredText),
          gate: Yup.string().max(7, "7 maximo").required(requiredText),
          aditional: Yup.string().required(requiredText),
          nameAndLast: Yup.string().required(requiredText),
          amountPay: Yup.number()
            .min(totalSta, "Tiene que ser mayor a la cantidad a pagar")
            .required(requiredText),
        })}
        onSubmit={(values) => {
          console.log(values);
          localStorage.setItem("formUser", JSON.stringify(values));
        }}
      >
        <Form>
          <h2>Detalles del envío</h2>
          <MyTextInput
            label={"Dirección"}
            name="direction"
            placeholder="Ej: Cala cala"
          />

          <MyTextInput label={"Piso"} name="floor" placeholder="Ej:3" />

          <MyTextInput label={"Puerta"} name="gate" placeholder="Ej:A" />

          <MyTextInput
            label={"Indicación adicional"}
            name="aditional"
            placeholder="Ej: Casa con rejas verdes"
          />

          <MyTextInput
            label={"Nombre y apellido"}
            name="nameAndLast"
            placeholder="Ej: Juan perez"
          />

          <MyTextInput
            label={"¿Con cuanto vas a pagar?"}
            name="amountPay"
            placeholder="Ej: $400"
          />

          <Btn type="submit">Guardar</Btn>
        </Form>
      </Formik>
    </ContainerForm>
  );
};

export default FormValidate;
