import { useState } from 'react';
import { useCopyToClipboard } from 'react-use';

import { Box, Button, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { AppConfig } from '@shared/config';
import { UIIcons } from '@shared/ui-icons';
import { Tooltip, UIKit } from '@shared/ui-kit';

export interface AuthTelegramVerifyModalProps extends PortalProps<void> {
  code?: string;
  link?: string;

  onShowQrCode: () => any;
  onRegenerateCode?: () => Promise<any>;
  error?: string;
}

export function AuthTelegramVerifyModal({ code, link, onShowQrCode, onRegenerateCode, error, portal }: AuthTelegramVerifyModalProps) {
  const [, copyToClipboard] = useCopyToClipboard();
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  const copy = () => {
    copyToClipboard(code);
    setTooltipIsOpen(true);
  };

  return (
    <UIKit.Modal
      title={
        <Text fontSize='2md' color='white' fontFamily='promo'>
          Login in with Telegram
        </Text>
      }
      onClose={() => portal.resolve()}
      size='2xl'
      isCentered
      variant='brand'
      maxW='30rem'
    >
      <VStack width='full' gap='1.25rem'>
        <HStack width='full'>
          <Text fontSize='sm' color='dark.100'>
            This button opens a conversation with our @marsbase_bot where you can click the “Start”
            command to login. When there’s no “Start” button, enter and send the code:
          </Text>
        </HStack>
        <Tooltip
          hasArrow
          closeOnPointerDown
          isOpen={tooltipIsOpen}
          onClose={() => setTooltipIsOpen(false)}
          closeDelay={500}
          placement='bottom-start'
          offset={[-10, 10]}
          label={<Text fontSize='sm'>Copy!</Text>}
        >
          <HStack width='full' gap='0.2rem' onClick={copy}>
            {code?.split('').map((value, index) => (
              <Box
                key={value + index}
                fontSize='md'
                color='white'
                background='dark.800'
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='1.5rem'
                height='2rem'
                borderRadius='0.25rem'
                cursor='pointer'
              >
                {value}
              </Box>
            ))}
          </HStack>
        </Tooltip>
        <HStack flexDirection="column" width='full'>
          <Button
            width="full"
            borderColor="orange.200"
            as={Link}
            href={link}
            target="_blank"
            leftIcon={<Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              background="white"
              borderRadius="100%"
              width="1.5rem"
              height="1.5rem"
            >
              <UIIcons.Social.TelegramIcon fontSize="1rem" color="orange.300" />
            </Box>
          }
          >
            Open Telegram
          </Button>
          <Button width="full" variant="outline" borderColor="orange.200" onClick={onShowQrCode}>
            Show QR code
          </Button>
        </HStack>
        {error && (
          <VStack width='full'>
            <Text>{error}</Text>
            {onRegenerateCode &&
              <Button width="full" onClick={onRegenerateCode}>
                Regenerate code
              </Button>
            }
          </VStack>
        )}
        <HStack width='full'>
          <Text fontSize='sm' color='dark.100'>
            for details on what data we capture, refer to
            our <Text
            href={AppConfig.links.privacyPolicyURL}
            target="_blank"
            as={Link}
            color="orange.300"
          >
            Privacy Policy
          </Text> and the
            Telegram login documentation.
          </Text>
        </HStack>
      </VStack>
    </UIKit.Modal>
  );
}
