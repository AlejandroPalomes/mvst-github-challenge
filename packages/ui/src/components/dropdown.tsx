import React, { useState, type FC, useRef } from 'react';
import { useClickOutside } from '../hooks/use-click-outside';
import { type DropdownItem, Item } from './dropdown-item';
import { DropdownContextProvider } from './dorpdown-context';
import { Input } from './input';

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

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => { setIsOpen(false); });

  const onFocus = () => {
    setIsOpen(true);
  }

  return (
    <DropdownContextProvider isOpen={isOpen} onChange={onChange} setIsOpen={setIsOpen}>
      <div className="w-full relative" ref={dropdownRef}>
        <Input
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
        />
        {isOpen && children &&
          <div className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" tabIndex={-1}>
            <ul className="py-1 bg-customGray-600 rounded-md" role="none">
              {children}
            </ul>
          </div>
        }
      </div>
    </DropdownContextProvider>
  );
};

DropdownSearcher.Item = Item;
