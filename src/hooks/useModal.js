import { useState } from "react";
export const useModal = (valor = false) => {
  const [isOpen, setIsOpen] = useState(valor);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return { isOpen, openModal, closeModal };
};
