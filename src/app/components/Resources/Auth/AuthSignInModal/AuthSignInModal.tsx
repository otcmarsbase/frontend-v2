import { useCallback } from 'react';

import { Text } from '@chakra-ui/react';
import { PortalProps } from '@packages/react-portal';
import { UIKit } from '@shared/ui-kit';

import { useAuth } from '../AuthProvider';

import { SelectConnector, VerifyMessage } from './atoms';

export interface AuthSignInModalProps extends PortalProps<void> {}

export function AuthSignInModal({ portal }: AuthSignInModalProps) {
  const { status, signInWithConnector } = useAuth();

  const onClose = useCallback(() => {
    if (portal?.resolve) portal.resolve(null);
  }, [portal]);

  return (
    <UIKit.Modal
      title={
        <Text fontSize="2md" color="white" fontFamily="promo">
          {status === 'CONNECTOR_SELECT' ? 'Connect wallet' : status === 'VERIFY_WALLET' ? 'Verify wallet' : void 0}
        </Text>
      }
      onClose={onClose}
      size="2xl"
      isCentered
      variant="brand"
      maxW="30rem"
    >
      {status === 'CONNECTOR_SELECT' ? (
        <SelectConnector isLoading={false} onConnectorClick={signInWithConnector} />
      ) : status === 'VERIFY_WALLET' ? (
        <VerifyMessage />
      ) : (
        void 0
      )}
    </UIKit.Modal>
  );
}
