import { PropsWithChildren } from 'react';

import { Permission } from '../types';
import {
  PermissionComponent,
  PermissionComponentProps,
} from '../PermissionComponent';

export function createComponent(
  permissions: Permission[],
): React.FC<PropsWithChildren<Omit<PermissionComponentProps, 'permissions'>>> {
  return function (props) {
    return <PermissionComponent permissions={permissions} {...props} />;
  };
}
