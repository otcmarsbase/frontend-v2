import React, { Fragment, PropsWithChildren } from 'react';

import { AuthThen } from '../AuthThenVisible';

export interface AuthActionProps extends PropsWithChildren {}

export function AuthAction({ children }: AuthActionProps) {
  return (
    <AuthThen>
      {({ isAuthorized, signIn }) =>
        isAuthorized ? (
          <Fragment>{children}</Fragment>
        ) : (
          React.cloneElement(children as React.ReactElement, {
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              signIn();
            },
          })
        )
      }
    </AuthThen>
  );
}
