import { useCallback } from 'react';

import { useRpcSchemaClient } from '@app/components';
import { Button, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { Resource } from '@schema/otc-desk-gateway';
import { Modal } from '@shared/ui-kit';

export interface ConfirmEditModalProps extends PortalProps<boolean> {
  lot: Resource.Lot.Lot;
}

export const ConfirmEditModal: React.FC<ConfirmEditModalProps> = ({ portal }) => {
  const rpcSchema = useRpcSchemaClient();

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
          Make changes to the lot
        </Text>
      }
      onClose={onClose}
      size="2xl"
      isCentered
      maxW="36rem"
      variant="brightDark"
    >
      <VStack w="full" alignItems="start" gap="2rem">
        <Text>When editing a lot, the previous one will be transferred to the draft. Do you want to make changes?</Text>
        <SimpleGrid columns={2} w="full" gap="1.5rem">
          <Button onClick={onSubmit} variant="orange">
            Make changes
          </Button>
          <Button onClick={onClose} variant="darkOutline">
            Cancel
          </Button>
        </SimpleGrid>
      </VStack>
    </Modal>
  );
};
