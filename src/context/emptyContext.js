import { createContext, useState } from "react";

const EmptyContext = createContext();

const initialEmpty = false;

const EmptyProvider = ({ children }) => {
  const [empty, setEmpty] = useState(initialEmpty);

  const handleEmpty = () => {
    setEmpty(true)
  };

  const handleFull = () => {
    setEmpty(false)
  };

  const data = { empty, handleEmpty,handleFull };

  return <EmptyContext.Provider value={data}>{children}</EmptyContext.Provider>;
};

export { EmptyProvider };
export default EmptyContext