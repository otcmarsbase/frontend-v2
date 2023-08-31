import { useCallback } from 'react';

import { Text } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { UIKit } from '@shared/ui-kit';

import { AuthConnectorType } from '../info';

import { SelectConnector } from './atoms';

export interface AuthConnectModalProps extends PortalProps<AuthConnectorType> {}

export function AuthConnectModal({ portal }: AuthConnectModalProps) {
  const onClose = useCallback(() => {
    if (portal?.resolve) portal.resolve(null);
  }, [portal]);

  const onResolve = useCallback(
    (connectorType: AuthConnectorType) => {
      if (portal?.resolve) portal.resolve(connectorType);
    },
    [portal],
  );

  return (
    <UIKit.Modal
      title={
        <Text fontSize="2md" color="white" fontFamily="promo">
          Connect wallet
        </Text>
      }
      onClose={onClose}
      size="2xl"
      isCentered
      variant="brand"
      maxW="30rem"
    >
      <SelectConnector isLoading={false} onConnectorClick={onResolve} />
    </UIKit.Modal>
  );
}
