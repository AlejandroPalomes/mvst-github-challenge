import React, { type FC } from 'react';
import { useDropdownContext } from './dorpdown-context';

export interface DropdownItemProps {
  children: React.ReactNode
  onSelect?: () => void;
  value?: string;
}

export type DropdownItem = FC<DropdownItemProps>;

export const Item: DropdownItem = ({ children, onSelect, value }) => {
  const { onChange, setIsOpen } = useDropdownContext();

  const handleOnSelect = () => {
    onChange && onChange(value || '');
    setIsOpen(false);
    onSelect && onSelect();
  };

  return (
    <li
      className="text-white block px-4 py-2 text-sm text-left bg-customGray-600 hover:bg-customGray-700 duration-100 cursor-pointer"
      onClick={handleOnSelect}
      role="menuitem"
      tabIndex={-1}
    >
      {children}
    </li>
    );
};
