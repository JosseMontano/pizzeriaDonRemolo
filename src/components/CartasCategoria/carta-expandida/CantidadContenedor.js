import Contador from "./Contador";
export const CantidadContenedor = () => {

	return (
		<section className="cantidad-contenedor grid grid-cols-2 sm:grid-cols-none sm:grid-rows-2">
			<p className="text-text_clr">Cantidad</p>
			<Contador />
		</section>
	);
};