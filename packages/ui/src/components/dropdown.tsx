import React, { useState, type FC, useRef } from 'react';
import { useClickOutside } from '../hooks/use-click-outside';
import { type DropdownItem, Item } from './dropdown-item';
import { DropdownContextProvider } from './dorpdown-context';
import { Input } from './input';
import { DropdownStaticHeader } from './dropdown-static-header';

const optionsContainerStyles = 'absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none';
const optionsScrollStyles = (hasLimit: boolean): string =>
  hasLimit ? 'h-48 overflow-y-scroll' : 'overflow-y-hidden';

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
  dropLimit?: boolean;
  children?: React.ReactNode;
  value?: string;
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

export const Dropdown: DropdownType = ({ onChange, placeholder, variant = 'static', headerTitle, dropLimit = true, children, value }) => {
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
          value={value}
        />
        {isOpen && children &&
          <div className={`${optionsContainerStyles} ${optionsScrollStyles(dropLimit)}`} tabIndex={-1}>
            <ul className="bg-customGray-600 rounded-md" role="none">
              {children}
            </ul>
          </div>
        }
      </div>
    </DropdownContextProvider>
  );
};

Dropdown.Item = Item;
