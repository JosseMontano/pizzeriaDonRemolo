import { createContext, useState } from "react";

const ModalContext = createContext();

const initialTheme = false;

const ModalProvider = ({ children }) => {
  const [mostrarCarta, setMostrarCarta] = useState(initialTheme);

  const handleModal = () => setMostrarCarta(!mostrarCarta)

  const data = { mostrarCarta, handleModal };

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export { ModalProvider };
export default ModalContext