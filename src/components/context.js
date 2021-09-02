import React from "react";
import { useContext, useState } from "react";
const appContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const showModalFunc = () => {
    setShowModal(true);
  };
  const closeModalFunc = () => {
    setShowModal(false);
  };

  const showSideFunc = () => {
    setShowSide(true);
  };

  const closeSideFunc = () => {
    setShowSide(false);
  };

  return (
    <appContext.Provider
      value={{
        showModal,
        showSide,
        showModalFunc,
        closeModalFunc,
        showSideFunc,
        closeSideFunc,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalHook = () => {
  return useContext(appContext);
};

export { AppProvider, appContext, useGlobalHook };
