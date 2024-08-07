import QRCode from 'react-qr-code';

import { HStack, Text, VStack } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { UIKit } from '@shared/ui-kit';

export interface AuthTelegramQrCodeModalProps extends PortalProps<void> {
  link: string;
}

export function AuthTelegramQrCodeModal({ link, portal }: AuthTelegramQrCodeModalProps) {
  return (
    <UIKit.Modal
      title={
        <Text fontSize="2md" color="white" fontFamily="promo">
          Scan QR
        </Text>
      }
      onClose={() => portal.resolve()}
      size="2xl"
      isCentered
      variant="brand"
      maxW="30rem"
    >
      <VStack width="full" gap="1.25rem">
        <HStack width="full">
          <Text fontSize="sm" color="dark.100">
            Scan this QR with device camera where Telegram is installed or
          </Text>
        </HStack>
        <QRCode value={link} style={{ background: 'white', padding: '16px' }} />
      </VStack>
    </UIKit.Modal>
  );
}
