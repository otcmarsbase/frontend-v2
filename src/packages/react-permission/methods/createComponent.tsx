import { PropsWithChildren } from 'react';

import { PermissionComponent, PermissionComponentProps } from '../PermissionComponent';
import { Permission } from '../types';

export function createComponent(
  permissions: Permission[],
): React.FC<PropsWithChildren<Omit<PermissionComponentProps, 'permissions'>>> {
  return function (props) {
    return <PermissionComponent permissions={permissions} {...props} />;
  };
}
