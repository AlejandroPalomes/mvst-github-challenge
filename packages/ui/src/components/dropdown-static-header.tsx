import React, { type FC } from 'react';
import { useDropdownContext } from './dorpdown-context';
import { CaretIcon } from './caret-icon';

export interface DropdownStaticHeaderProps {
  placeholder?: string;
}

export type DropdownStaticHeaderType = FC<DropdownStaticHeaderProps>;

export const DropdownStaticHeader: DropdownStaticHeaderType = ({ placeholder }) => {
  const { setIsOpen, isOpen, headerTitle } = useDropdownContext();

  const handleOnClick = () => {
    setIsOpen((previous: boolean) => !previous);
  };

  return (
    <span
      className="w-full h-8 block text-left rounded-md px-3 border border-solid border-customGray-600 hover:border-customGray-500 cursor-pointer flex items-center justify-between"
      onClick={handleOnClick}
    >
      {headerTitle || placeholder}
      <CaretIcon direction={isOpen ? 'top' : 'down'} size={16}/>
    </span>
    );
};
