import React from 'react'

export const CartaDescripcion = ({ tituloCarta, descripcionCarta, precioCarta }) => {
	return (
		<article className="descripcion-container flex flex-col justify-between h-32 bg-white">
			<div>
				<h3 className="text-[21px] text-text_clr font-bold">{tituloCarta}</h3>
				<p className="text-[15px] text-desc_clr">{descripcionCarta}</p>
			</div>
			<p className="text-[25px] text-text_clr">${precioCarta}xUnidad</p>
		</article>
	);
};