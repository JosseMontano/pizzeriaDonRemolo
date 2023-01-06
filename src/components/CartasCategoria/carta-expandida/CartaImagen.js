import styled from "styled-components";

const Img = styled.img`
  object-position: center;
  height: 170px;
  width: 100%;
`;

export const CartaImagen = ({ imagenCarta }) => {
  return <Img src={`${imagenCarta}`} alt={imagenCarta} />;
};
