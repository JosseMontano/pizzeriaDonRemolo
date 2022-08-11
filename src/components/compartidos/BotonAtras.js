export const BotonAtras = ({ estilos, fn }) => {
	return (
		<button className={`${estilos} flex justify-center items-center w-8 h-8 bg-white rounded-[50%]`} onClick={fn}>
			<img src={`./imagenes/iconos/arrow-back.svg`} alt="volver" />
		</button>
	);
};