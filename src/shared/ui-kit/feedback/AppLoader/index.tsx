import { useCallback, useEffect, useRef, useState } from 'react';

export interface AppLoadProps {
  onAppLoad: () => Promise<void>;
  children: () => React.ReactNode;

  renderLoader?: () => React.ReactNode;
}

export function AppLoad({ renderLoader, onAppLoad, children }: AppLoadProps) {
  const [isLoading, setIsLoading] = useState(true);
  const startedRef = useRef(false);

  const onLoadApp = useCallback(async () => {
    setIsLoading(true);
    if (onAppLoad) await onAppLoad();
    setIsLoading(false);
  }, [onAppLoad]);

  useEffect(() => {
    if (startedRef.current) return;

    startedRef.current = true;
    onLoadApp();
  }, [onLoadApp]);

  if (isLoading) return <>{renderLoader()}</>;

  return <>{children()}</>;
}
