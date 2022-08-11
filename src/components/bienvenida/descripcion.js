import "../../styles/header/descripcion.css";
export default function Descripcion() {
  return (
    <>
      <div className="max-descripcion-container sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:m-0 xl:grid xl:grid-cols-2 2xl:grid-cols-2 xl:mt-[112px]">
        <div className="imagen_header">
          {" "}
          {/* La imagen se jala o muestra desde styles/header/descripcion  background-image: url() */}
        </div>
        <div className="mt-8 sm:relative sm:-left-28 lg:relative lg:-left-72 xl:relative xl:-left-[330px] 2xl:relative 2xl:-left-1/2 xl:mb-[56px]">
          <span className="px-3.5 grid grid-rows-3">
            <span className="text-[18px] font-bold leading-[23px]  text-justify mt-1.5 m-0  text-lg sm:text-3xl xl:text-[32px] xl:font-bold xl:leading-10 ">
              <span className="bold">Pedidos online</span>{" "}
            </span>
            <span className="w-[336px] font-normal text-[14px] leading-[120%] tracking-[0.4px]  text-justify text-sm sm:text-base xl:font-normal xl:text-base xl:leading-[120%] xl:tracking-[0.4px] xl:w-[505px]">
              <span className="regular">
                Realizá tu pedido sin necesidad del registro. Al finalizar tu
                orden se nos enviará por Whatsapp.
              </span>
            </span>
            <span className="text-justify p-0 xl:relative xl:top-3 ">
              <span className="font-medium text-[18px] leading-[23px] tracking-[0.25px] text-justify sm:text-xl xl:text-xl xl:font-medium xl:leading-[25px] xl:tracking-[0.25px]  ">
                <span className="sub_titulo">Horarios </span>{" "}
              </span>
              <span className="font-normal text-[14px] leading-[120%] tracking-[0.4px] text-sm sm:text-base xl:text-[16px] xl:leading-[120%] xl:tracking-[0.4px]">
                <span className="regular">Mar a Dom de: 19 P.M. a 01 A.M.</span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
