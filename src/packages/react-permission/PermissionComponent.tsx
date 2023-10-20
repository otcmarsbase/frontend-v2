import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { combinePermissions, resolve } from './methods';
import { Permission } from './types';

export interface PermissionComponentProps {
  permissions: Permission[];
  loadingComponent?: React.ReactNode;
  notPermissionComponent?: React.ReactNode;
}

export const PermissionComponent: React.FC<PropsWithChildren<PermissionComponentProps>> = ({
  permissions,
  notPermissionComponent = <></>,
  loadingComponent = <></>,
  children,
}) => {
  const basePermission = useMemo(() => combinePermissions(permissions), [permissions]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<React.ReactNode>(<>{children}</>);

  const check = useCallback(async () => {
    setLoading(true);

    const result = await resolve(basePermission, <>{children}</>);
    setResult(result);

    setLoading(false);
  }, [basePermission, children]);

  useEffect(() => {
    check();
  }, [check]);

  if (loading) return <>{loadingComponent}</>;
  if (!result) return <>{notPermissionComponent}</>;
  return <>{result}</>;
};
