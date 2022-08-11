import "../../styles/cuerpoCategoria/nombreCuerpoCategoria.css";
export default function NombreCuerpoCategoria(props) {
  return (
    <>
      <div className="contenedor-nombre-texto-categoria">
        <p className="nombreCategoria"> {props.nombreCategoria} </p>
      </div>
    </>
  );
}
