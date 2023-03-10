import styled from "styled-components";

const Container = styled.div`
  .nombreCategoria {
    font-family: Cera-Pro-Bold;
  }
  width: 95%;
  max-width: 1200px;
  padding: 0 10px;
  border-bottom: 2px solid #d6d6d6;
  margin: 30px auto;
  p {
    font-size: 20px;
  }
`;

export default function NombreCuerpoCategoria(props) {
  let msg = "";
  if (props.nombreCategoria) {
    msg = "Todos los productos con la palabra " + props.nombreCategoria;
  }

  return (
    <Container>
      <p> {msg} </p>
    </Container>
  );
}
