import React,{createContext,useState} from "react";
export  const AppContext=createContext();
 let MyProvider=({children})=>{
    const [contar,setContar]=useState()

    return(
        <AppContext.Provider value={{contar,setContar}} >
            {children}
        </AppContext.Provider>
    )
}
export default MyProvider;
