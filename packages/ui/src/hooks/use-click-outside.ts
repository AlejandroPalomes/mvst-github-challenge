import { useEffect } from 'react';
import type React from 'react';

type RefType<T> = React.RefObject<T>;
type HandlerType = (event?: MouseEvent | TouchEvent) => void;

/**
 * Custom hook used to detect a click outside the referred elemnt and trigger an action
 * 
 * @param ref - The reference for the element to be observed.
 * @param handler - Callback function to execute once a click is made outside the reference elemnt.
 */
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
