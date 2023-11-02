import { useCallback } from 'react';

import { Button, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { Resource } from '@schema/desk-gateway';
import { Modal } from '@shared/ui-kit';

export interface ConfirmDeleteModalProps extends PortalProps<boolean> {
  lot: Resource.Lot.Lot;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ portal }) => {
  const onClose = useCallback(() => {
    if (portal && portal.resolve) portal.resolve(false);
  }, [portal]);

  const onSubmit = useCallback(() => {
    if (portal && portal.resolve) portal.resolve(true);
  }, [portal]);

  return (
    <Modal
      title={
        <Text fontWeight={700} fontFamily="promo" fontSize="2md" textTransform="uppercase" color="white">
          Confirmation to Delete the Lot
        </Text>
      }
      onClose={onClose}
      size="2xl"
      isCentered
      maxW="36rem"
      variant="brightDark"
    >
      <VStack w="full" alignItems="start" gap="2rem">
        <Text>
          Are you sure you want to delete this lot? After deletion, the lot and its associated data will be permanently
          lost. Please confirm your choice.
        </Text>
        <SimpleGrid columns={2} w="full" gap="1.5rem">
          <Button onClick={onSubmit} variant="orange">
            Yes, delete
          </Button>
          <Button onClick={onClose} variant="darkOutline">
            Cancel
          </Button>
        </SimpleGrid>
      </VStack>
    </Modal>
  );
};
