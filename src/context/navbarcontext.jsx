import React, { createContext, useContext, useState } from 'react';

const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState('weather');

  const selectItem = (id) => {
    setSelectedId(id);
  };

  const contextValue = {
    selectedId,
    selectItem,
  };

  return (
    <NavBarContext.Provider value={contextValue}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBarContext = () => {
  const context = useContext(NavBarContext);

  if (!context) {
    throw new Error('useNavBarContext must be used within a NavBarProvider');
  }

  return context;
};


