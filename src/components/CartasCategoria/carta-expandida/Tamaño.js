export const Tamaño = ({ estilos, titulo, fn }) => {
    return (
      <div className={`opciones-tamaño flex justify-center items-center w-20 h-10 border border-primary_transparent rounded-xl text-[#6B6166] ${estilos}`} data-tamaño={titulo.toLowerCase()} onClick={fn}>{titulo}</div>
    );
};