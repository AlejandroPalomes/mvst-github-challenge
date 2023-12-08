import { useEffect, useRef } from 'react';
import { Config } from '../../lib/Config.ts';

/**
 * Debouncer function to perform an action with certain delay
 * 
 * @param callback - Callback is invoked after the specified delay
 * @param delay - Specifies the debounce delay in milliseconds
 * @returns Funcrion that checks if there is an existing timeout and clears it
 *          before setting a new timeout using setTimeout
 */
export const useDebounce = (callback: (...args: any) => void, delay: number = Config.DEFAULT_DEBOUNCE_TIME) => {
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    // Cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};