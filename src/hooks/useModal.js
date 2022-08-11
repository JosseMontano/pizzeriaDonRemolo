import { useState } from "react";
export  const useModal=(valor=false)=>{
    const [isOpen,setIsOpen]=useState(valor);
    const openModal=()=>setIsOpen(true);
    const closeModal =()=>setIsOpen(true);
    return [isOpen,openModal,closeModal]
}