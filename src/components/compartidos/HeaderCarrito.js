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


export default function HeaderCarrito({}) {
  return (
    <>
      <NavLink to="/">
        <Container className="fondo">
          <ContainerSoon className="">
            <Section className="">
              <p>
                <span>Pizzería Don Rémolo1</span>
              </p>
            </Section>
          </ContainerSoon>
        </Container>
      </NavLink>
    </>
  );
}
