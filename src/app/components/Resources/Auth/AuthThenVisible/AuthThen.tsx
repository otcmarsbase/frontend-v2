import { Fragment } from 'react';

import { UseAuth, useAuth } from '../AuthProvider';

export interface AuthThenProps {
  children: (info: UseAuth) => React.ReactNode;
}

export function AuthThen({ children }: AuthThenProps) {
  const info = useAuth();

  return <Fragment>{children(info)}</Fragment>;
}
