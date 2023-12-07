import React, { type FC } from 'react';
import { useDropdownContext } from './dorpdown-context';

export interface DropdownItemProps {
  children: React.ReactNode
  onSelect?: () => void;
}

export type DropdownItem = FC<DropdownItemProps>;

export const Item: DropdownItem = ({ children, onSelect }) => {
  const { onChange, setIsOpen } = useDropdownContext();

  const handleOnSelect = () => {
    onChange && onChange('');
    setIsOpen(false);
    onSelect && onSelect();
  };

  return (
    <li
      className="text-white block px-4 py-2 text-sm text-left bg-customGray-600 hover:bg-customGray-700 duration-100 cursor-pointer"
      id="menu-item-0"
      onClick={handleOnSelect}
      role="menuitem"
      tabIndex={-1}
    >
      {children}
    </li>
    );
};
