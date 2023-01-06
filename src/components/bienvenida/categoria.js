import React from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  div {
    height: 48px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
    border-style: solid;
    border-color: #e5e7eb;
    border-radius: 20px;
    padding: 8px 16px 8px 8px;
    margin-right: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    &:hover {
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Img = styled.img`
  background-color: #e9f3f5;
  border-radius: 50%;
  width: 32px;
`;

const Span = styled.span`
  margin-left: 8px;
  text-align: center;
  font-size: 16px;
`;

const categoria = (props) => {
  const handleSubmit = (id) => {
    props.onSubmit(id);
  };
  return (
    <Container key={props.cat.id}>
      <div
        style={props.cat.state ? props.cat.stylesDiv : {}}
        onClick={() => handleSubmit(props.cat.id)}
      >
        <Img src={props.cat.state ? props.cat.imagenOn : props.cat.imagenOff} />
        <Span style={props.cat.state ? props.cat.stylesText : {}}>
          {props.cat.nombre}
        </Span>
      </div>
    </Container>
  );
};

export default categoria;
