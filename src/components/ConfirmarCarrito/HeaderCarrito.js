import "../../styles/ConfirmarCarrito/HeaderCarrito.css";
import "../../styles/App.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ffff;

  @media screen and (min-width: 360px) {
    background-color: #e74423;
  }
  @media screen and (min-width: 1280px) {
    background-color: #ffff;
  }
`;

const ContainerSoon = styled.div`
  margin-bottom: 4px;
  height: 72px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0px 16px 24px -18px rgba(0, 0, 0, 0.12);
`;

const Section = styled.section`
  padding: 8;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  //xl:text-4xl xl:leading-7 2xl:8xl xl:tracking-wide
  p span {
    overflow: hidden;
    margin-left: 10px;
    color: #e74423;
    font-family: Cera-Pro-Bold;
    font-weight: bold;
    display: block;
    font-size: 2.25rem;
    line-height: 2.5rem;
    position: absolute;
    left: 98px;
    top: 21px;
  }
`;

const OrderSummary = styled.p`
  color: #fff;
  position: absolute;
  left: 78px;
  top: 25px;
  font-family: medium;
  visibility: hidden;
`;

const Btn = styled.button`
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  top: 18px;
  left: 12px;
  visibility: hidden;
  svg {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 8px;
    top: 8px;
  }
`;
export default function HeaderCarrito({ handleModal }) {
  const handleclick = () => {};

  return (
    <>
      <NavLink exact to="/">
        <Container className="fondo">
          <ContainerSoon className="">
            <Section className="">
              <p>
                <span>Pizzería Don Rémolo</span>
              </p>
              <OrderSummary className="">Resumen del pedido</OrderSummary>
            </Section>
            {/* LA FLECHA DE REGRESAR */}
            <Btn onClick={handleclick} className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#E74423"
                />
              </svg>
            </Btn>

            {/* FLECHA  */}
          </ContainerSoon>
        </Container>
      </NavLink>
    </>
  );
}
