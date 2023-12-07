import React, { createContext, type FC, useContext, type Dispatch, type SetStateAction } from 'react';

interface DropdownContextValue {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onChange?: (newValue: string) => void;
  headerTitle?: string;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

interface DropdownContextProps {
  children: React.ReactNode;
  isOpen: boolean;
  onChange?: (newValue: string) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  headerTitle?: string;
}

export const DropdownContextProvider: FC<DropdownContextProps> = ({ children, isOpen, setIsOpen, onChange, headerTitle }) => {
  const context: DropdownContextValue = {
    isOpen,
    setIsOpen,
    onChange,
    headerTitle
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
