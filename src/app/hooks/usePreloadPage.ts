import { useLayoutEffect, useRef } from 'react';

export function usePreloadPage(callback: () => any) {
  const isPreloadedRef = useRef(false);

  useLayoutEffect(() => {
    if (!isPreloadedRef.current) {
      isPreloadedRef.current = true;
      callback();
    }
    return () => {
      isPreloadedRef.current = false;
    };
  }, [callback]);
}
