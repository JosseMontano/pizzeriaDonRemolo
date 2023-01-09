import React from "react";

const Description = ({ title, aclaration }) => {
  return (
    <div>
      <span>{title}</span>
      <p>x1 unidad</p>
      <span>Aclaracion</span>
      {aclaration ? <p>{aclaration}</p> : <p>Ninguna</p>}
    </div>
  );
};

export default Description;
