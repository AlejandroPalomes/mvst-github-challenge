import React, { useState, type FC } from 'react';
import { type DropdownItem, Item } from './dropdown-item';

export interface DropdownSearcherProps {
  onChange?: (newValue: string) => void;
  placeholder?: string;
  children?: React.ReactNode
}

interface DropdownSearcherAtoms {
  Item: DropdownItem;
}

type DropdownSearcherType = FC<DropdownSearcherProps> & DropdownSearcherAtoms;

export const DropdownSearcher: DropdownSearcherType = ({ onChange, placeholder, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnChange = (event: any) => {
    onChange?.(event.target?.value as string);
  };

  const onFocus = () => {
    setIsOpen(true);
  }

  const onBlur = () => {
    setIsOpen(false);
  }

  return (
    <div className="w-full relative">
      <input
        className="w-full rounded-md py-1 px-3"
        onBlur={onBlur}
        onChange={handleOnChange}
        onFocus={onFocus}
        placeholder={placeholder}
        type="input"
      />
      {isOpen && children &&
        <div className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" tabIndex={-1}>
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      }
    </div>
  );
};

DropdownSearcher.Item = Item;
