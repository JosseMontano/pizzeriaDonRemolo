import { useNavigate } from "react-router-dom";
import "../../styles/ConfirmarCarrito/HeaderCarrito.css";
import "../../styles/App.css";
import { NavLink } from "react-router-dom";

export default function HeaderCarrito({ handleModal }) {
  const navigate = useNavigate();
  const handleclick = () => {};

  return (
    <>
      <NavLink exact to="/">
        <div className="fondo">
          <div className=" mb-4 h-20 xl:h-[72px] xl:w-[100%] xl:bg-white xl:shadow-header xl:fixed xl:top-[0px] xl:z-[999]">
            <section className=" p-3.5 flex items-start justify-start  sm:p-4 sm:flex sm:items-start sm:justify-start md:p-6 md:flex md:items-start md:justify-start lg:p-8  lg:flex lg:items-start lg:justify-start ">
              <p className="hidden lg:ml-10 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xl:font-bold xl:leading-7 xl:block 2xl:8xl xl:tracking-wide xl:absolute left-[98px] top-[21px]">
                {" "}
                <span>Pizzería Don Rémolo</span>
              </p>
              <p className="text-white absolute left-[78px] top-[25px] font-medium text-xl tracking-wider xl:hidden">
                Resumen del pedido
              </p>
            </section>
            {/* LA FLECHA DE REGRESAR */}
            <button
              onClick={handleclick}
              className="rounded-full w-10 h-10 bg-white absolute top-[18px] left-[12px] xl:hidden"
            >
              <svg
                className="absolute w-[24px] h-[24px] left-[8px] top-[8px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#E74423"
                />
              </svg>
            </button>

            {/* FLECHA  */}
          </div>
        </div>
      </NavLink>
    </>
  );
}
