import React, { type FC } from 'react';

export interface DropdownItemProps {
  children: React.ReactNode
  onSelect?: () => void;
}

export type DropdownItem = FC<DropdownItemProps>;

export const Item: DropdownItem = ({ children, onSelect }) => {

  const handleOnSelect = () => {
    onSelect && onSelect();
  };

  return (
    <span
      className="text-gray-700 block px-4 py-2 text-sm text-left"
      id="menu-item-0"
      onSelect={handleOnSelect}
      role="menuitem"
      tabIndex={-1}
    >
      {children}
    </span>
    );
};
