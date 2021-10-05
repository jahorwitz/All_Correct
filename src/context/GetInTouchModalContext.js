import { createContext } from "react";
import UseModal from "../hooks/UseModal.js";

const GetInTouchModalContext = createContext();

export function GetInTouchProvider({ children }) {
  const { showModal, toggleModal } = UseModal();

  return (
    <GetInTouchModalContext.Provider value={{ showModal, toggleModal }}>
      {children}
    </GetInTouchModalContext.Provider>
  );
}

export default GetInTouchModalContext;
