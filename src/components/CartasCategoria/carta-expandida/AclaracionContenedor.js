import { useState } from "react";
import styled from "styled-components";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1;
  label {
    width: max-content;
    text-align: center;
    font-weight: bold;
  }
`;
const Input = styled.input`
  width: 100%;
  border-bottom: 1px solid gray;
  &:focus {
    border-bottom: 1px solid black;
    outline: 0ch;
  }
`;
const Small = styled.small`
  text-align: end;
`;
export const AclaracionContenedor = ({ onChangeText }) => {
  const [lengthAclaration, setLengthAclaration] = useState(0);
  const handleAclaracion = (e) => {
    if (e.target.value.trim() != "") {
      onChangeText(e.target.value);
      setLengthAclaration(e.target.value.length);
    }
  };
  return (
    <Container>
      <label>Aclaración sobre la comida</label>
      <Input
        maxLength="100"
        type="text"
        name="aclaracion"
        id="aclaracion"
        placeholder="Escribí aquí"
        onChange={handleAclaracion}
      />
      <Small>{lengthAclaration}/100</Small>
    </Container>
  );
};
