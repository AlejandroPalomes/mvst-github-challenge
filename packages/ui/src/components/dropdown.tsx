import React, { useState, type FC, useRef } from 'react';
import { useClickOutside } from '../hooks/use-click-outside';
import { type DropdownItem, Item } from './dropdown-item';
import { DropdownContextProvider } from './dorpdown-context';
import { Input } from './input';
import { DropdownStaticHeader } from './dropdown-static-header';

const optionsContainerStyles = 'absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none';

type DropdownVariants = 'searcher' | 'static';

const getHeader = (variant: DropdownVariants) => {
  switch (variant) {
    case 'searcher':
      return Input;
    case 'static':
    default:
      return DropdownStaticHeader;
  }
}

interface DropdownCommonProps {
  onChange?: (newValue: string) => void;
  placeholder?: string;
  children?: React.ReactNode
}

type DropdownDynamicProps =
  | {
      variant?: 'static';
      headerTitle: string
    }
  | {
      variant: 'searcher';
      headerTitle?: never  
    };


interface DropdownAtoms {
  Item: DropdownItem;
}

type DropdownType = FC<DropdownCommonProps & DropdownDynamicProps> & DropdownAtoms;

export const Dropdown: DropdownType = ({ onChange, placeholder, variant = 'static', headerTitle, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const Header = getHeader(variant);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => { setIsOpen(false); });

  const onFocus = () => {
    setIsOpen(true);
  }

  return (
    <DropdownContextProvider headerTitle={headerTitle} isOpen={isOpen} onChange={onChange} setIsOpen={setIsOpen}>
      <div className="w-full relative" ref={dropdownRef}>
        <Header
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
        />
        {isOpen && children &&
          <div className={optionsContainerStyles} tabIndex={-1}>
            <ul className="py-1 bg-customGray-600 rounded-md" role="none">
              {children}
            </ul>
          </div>
        }
      </div>
    </DropdownContextProvider>
  );
};

Dropdown.Item = Item;
