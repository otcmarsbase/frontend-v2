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
      {({ isAuthorized, onShowConnectModal, ...other }) =>
        isAuthorized ? (
          <Fragment>{children}</Fragment>
        ) : customRender ? (
          customRender({ isAuthorized, onShowConnectModal, ...other })
        ) : (
          <Button variant="brand" isLoading={onShowConnectModal.isLoading} onClick={onShowConnectModal}>
            Connect wallet
          </Button>
        )
      }
    </AuthThen>
  );
}
