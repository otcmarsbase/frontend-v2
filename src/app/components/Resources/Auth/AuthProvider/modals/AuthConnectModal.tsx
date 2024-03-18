import { useCallback } from 'react';

import { Text } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { UIKit } from '@shared/ui-kit';


import { SelectConnector } from './atoms';

export interface AuthConnectModalProps extends PortalProps<void> {
  onSelect?: (connectorType: string) => any;
}

export const AuthConnectModal: React.FC<AuthConnectModalProps> = ({ onSelect }: AuthConnectModalProps) => {
  const onClose = useCallback(() => {
    if (onSelect) onSelect(null);
  }, [onSelect]);

  const onResolve = useCallback(
    (connectorType: string) => {
      if (onSelect) onSelect(connectorType);
    },
    [onSelect],
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
};
