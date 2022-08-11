
export const ConfirmarPedido = ({ onChange }) => {
  const handleSubmit = (e) => {
    onChange(e);
  };
  return (
    <section
      className="confirmar-contenedor flex justify-items-center"
      onClick={handleSubmit}
    >
      <p
        className="confirmar-button self-end w-full max-w-[295px] h-full max-h-[48px] text-orange font-bold bg-primary_transparent border rounded-[50px] shadow-search text-center "
        type="button"
      >
        <span>
          Agregar al pedido
        </span>
      </p>
    </section>
  );
};
