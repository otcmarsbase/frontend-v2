import { useCallback } from 'react';

import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { Modal } from '@shared/ui-kit';

export function LotQuestionModerationModal({ portal }: PortalProps<void>) {
  const onClose = useCallback(() => {
    if (portal && portal.resolve) portal.resolve(null);
  }, [portal]);

  return (
    <Modal
      title={
        <Text fontWeight={700} fontFamily="promo" fontSize="2md" textTransform="uppercase" color="white">
          Your question is being moderated
        </Text>
      }
      onClose={onClose}
      size="2xl"
      isCentered
      maxW="36rem"
      variant="brand"
    >
      <VStack gap={6}>
        <Text>
          Thanks for the comment! Your request has been sent for moderation, when your question is moderated the answer
          will come to you in notifications
        </Text>
        <HStack w="100%" gap={6}>
          <Button bg="linear-gradient(266.47deg, #C77326 10.33%, #981807 102.01%);" w="100%">
            View notifications
          </Button>
          <Button variant="outline" w="100%" onClick={onClose}>
            Cancel
          </Button>
        </HStack>
      </VStack>
    </Modal>
  );
}
