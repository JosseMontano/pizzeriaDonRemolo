import "../../styles/header/titulo.css";
import "../../styles/App.css";
import { useContext } from "react";
import ModalContext from "./../../context/modalContext";

export default function Titulo() {
  const { modal, handleModal } = useContext(ModalContext);
  const hideHandleModal = () => {
    handleModal(modal);
  };
  return (
    <>
      <div
        onClick={hideHandleModal}
        className="bg-white shadow-header h-[56px] xl:h-[72px] xl:w-[100%] xl:fixed xl:top-[0px] xl:z-[999]"
      >
        <section className="flex items-start justify-start  sm:p-4 sm:flex sm:items-start sm:justify-start md:p-6 md:flex md:items-start md:justify-start lg:p-8  lg:flex lg:items-start lg:justify-start xl:p-5 xl:flex xl:items-start xl:justify-start 2xl:p-11 2xl:flex 2xl:items-start 2xl:justify-start">
          <p className="absolute left-[12px] top-[15px] lg:ml-10 text-xl sm:text-titulo1280 md:text-titulo1280 lg:text-titulo1280 xl:text-titulo1280 xl:font-bold xl:leading-7 xl:block 2xl:8xl xl:tracking-wide xl:absolute xl:left-[100px] xl:top-[21px] desktop1920:absolute desktop1920:left-[300px]">
            Pizzería Don Rémolo
          </p>
        </section>
      </div>
    </>
  );
}
