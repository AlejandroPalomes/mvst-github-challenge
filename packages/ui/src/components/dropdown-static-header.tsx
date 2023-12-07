import React, { type FC } from 'react';
import { useDropdownContext } from './dorpdown-context';

export interface DropdownStaticHeaderProps {
  placeholder?: string;
}

export type DropdownStaticHeaderType = FC<DropdownStaticHeaderProps>;

export const DropdownStaticHeader: DropdownStaticHeaderType = ({ placeholder }) => {
  const { setIsOpen, headerTitle } = useDropdownContext();

  const handleOnClick = () => {
    setIsOpen((previous: boolean) => !previous);
  };

  return (
    <span
      className="w-full h-8 block text-left rounded-md px-3 border border-solid border-customGray-600 cursor-pointer flex items-center"
      onClick={handleOnClick}
    >
      {headerTitle || placeholder}
    </span>
    );
};
