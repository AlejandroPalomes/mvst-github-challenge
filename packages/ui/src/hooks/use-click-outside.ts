import { useEffect } from 'react';
import type React from 'react';

type RefType<T> = React.RefObject<T>;
type HandlerType = (event?: MouseEvent | TouchEvent) => void;

export const useClickOutside = <T extends HTMLElement>(ref: RefType<T>, handler: HandlerType) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains((event.target as Node))) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
