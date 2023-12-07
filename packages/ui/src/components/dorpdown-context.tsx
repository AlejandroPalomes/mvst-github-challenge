import React, { createContext, type FC, useContext } from 'react';

interface DropdownContextValue {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onChange?: (newValue: string) => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

interface DropdownContextProps {
  children: React.ReactNode;
  isOpen: boolean;
  onChange?: (newValue: string) => void;
  setIsOpen: (value: boolean) => void;
}

export const DropdownContextProvider: FC<DropdownContextProps> = ({ children, isOpen, setIsOpen, onChange }) => {
  const context: DropdownContextValue = {
    isOpen,
    setIsOpen,
    onChange
  };

  return <DropdownContext.Provider value={context}>
    {children}
  </DropdownContext.Provider>;
};

export const useDropdownContext = (): DropdownContextValue => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdownContext only inside dropdowns');
  }
  return context;
};
