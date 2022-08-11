import "../../styles/ConfirmarCarrito/Modal.css";

export default function Modal({ children, closeModal }) {
  const closeModall = () => {
    const ocultar = document.querySelector(".modalpedido");
    ocultar.classList.add("modalpedidodesaparece");
    return ocultar;
  };

  return (
    <>
      <div className="modalpedido">
        <div className="w-[336px] h-[130px] shadow-3sm rounded-3xl fixed top-[95px] left-[12px] z-[888] bg-white xl:w-[610px] xl:h-[114px] xl:absolute xl:left-[415px] xl:top-[162px]">
          <button onClick={closeModall}>
            <svg
              className="w-[14px] h-[14px] absolute left-[306px] top-[16px]  xl:absolute xl:left-[580px]"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#53464D"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
