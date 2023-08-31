import { Fragment, PropsWithChildren } from 'react';

import { Button } from '@chakra-ui/react';

import { UseAuth } from '../AuthProvider';
import { AuthThen } from '../AuthThenVisible';

export interface AuthConnectButtonProps extends PropsWithChildren {
  customRender?: (info: UseAuth) => React.ReactNode;
}

export function AuthConnectButton({ customRender, children }: AuthConnectButtonProps) {
  return (
    <AuthThen>
      {({ isAuthorized, signIn, ...other }) =>
        isAuthorized ? (
          <Fragment>{children}</Fragment>
        ) : customRender ? (
          customRender({ isAuthorized, signIn, ...other })
        ) : (
          <Button isLoading={signIn.isLoading} onClick={signIn}>
            Connect wallet
          </Button>
        )
      }
    </AuthThen>
  );
}
