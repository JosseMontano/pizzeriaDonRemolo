import { useState } from "react";

export const AclaracionContenedor = ({ onChangeText }) => {
  const [lengthAclaration, setLengthAclaration] = useState(0)
	const handleAclaracion = (e) => {
    if(e.target.value.trim() != ""){
      onChangeText(e.target.value);
      setLengthAclaration(e.target.value.length)
    }
	}
  return (
    <section className="aclaracion-contenedor flex flex-col gap-1">
      <label className="w-max text-text_clr font-bold" htmlFor="aclaracion">
        Aclaración sobre la comida 
      </label>
      <input
        className="w-full border-b border-gray focus:outline-0 focus:border-b focus:border-black"
        maxLength="100"
        type="text"
        name="aclaracion"
        id="aclaracion"
        placeholder="Escribí aquí"
        onChange={handleAclaracion}
      />
      <small class="aclaracion-contador text-desc_clr">{lengthAclaration}/100</small>
    </section>
  );
};
