import { memo, useCallback } from 'react';
import { VStack, Text, Circle, HStack } from '@chakra-ui/react';
import { PortalProps } from '@packages/react-portal';
import { Modal, OfferTypeIcon } from '@shared/ui-kit';

export interface ChooseOfferTypeModalProps extends PortalProps {}

export const ChooseOfferTypeModal: React.FC<ChooseOfferTypeModalProps> = memo(
  ({ portal }) => {
    const onClose = useCallback(() => {
      if (portal && portal.resolve) portal.resolve(null);
    }, [portal]);

    const onSubmit = useCallback(
      (field) => {
        if (portal && portal.resolve) portal.resolve(field);
      },
      [portal],
    );

    const modalButtons: {
      label: string;
      type: 'buy' | 'sell';
      onClick: () => void;
    }[] = [
      { label: 'I want to buy', type: 'buy', onClick: () => onSubmit('Buy') },
      {
        label: 'I want to sell',
        type: 'sell',
        onClick: () => onSubmit('Sell'),
      },
    ];

    return (
      <Modal
        title={
          <Text
            fontWeight={700}
            fontFamily="promo"
            fontSize="2md"
            textTransform="uppercase"
            color="white"
          >
            Choose type of offer
          </Text>
        }
        description={
          <Text fontWeight={400} fontSize="sm" color="dark.50">
            Choose whether you want to buy or sell your funds
          </Text>
        }
        onClose={onClose}
        size="2xl"
        isCentered
        maxW="30rem"
      >
        <VStack>
          {modalButtons.map((button, index) => (
            <HStack
              w="full"
              p="1.25rem 1.5rem"
              borderRadius="0.75rem"
              key={index}
              cursor="pointer"
              onClick={button.onClick}
              gap="0.6rem"
              transition="all 0.3s"
              bg={button.type === 'sell' ? 'red.950' : 'green.950'}
              _hover={{
                bg: button.type === 'sell' ? 'red.400' : 'green.400',
              }}
            >
              <Circle
                size="2.5rem"
                bg={button.type === 'sell' ? 'red.500' : 'green.500'}
              >
                <OfferTypeIcon color="white" />
              </Circle>
              <Text fontWeight={600}>{button.label}</Text>
            </HStack>
          ))}
        </VStack>
      </Modal>
    );
  },
);
