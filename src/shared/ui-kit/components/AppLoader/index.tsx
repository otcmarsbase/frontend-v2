import { createElement, useCallback, useEffect, useRef, useState } from 'react';

export interface AppLoadProps {
  preload?: () => Promise<void>;
  loader?: React.FC;
}

export const AppLoad: React.FC<React.PropsWithChildren<AppLoadProps>> = ({ loader, preload, children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const startedRef = useRef(false);

  const onLoadApp = useCallback(async () => {
    setIsLoading(true);
    if (preload) await preload();
    setIsLoading(false);
  }, [preload]);

  useEffect(() => {
    if (startedRef.current) return;

    startedRef.current = true;
    onLoadApp();
  }, [onLoadApp]);

  if (isLoading) {
    return createElement(loader);
  }
  return <>{children}</>;
};
