import { useCallback } from 'react';

import { VStack, Text, Circle, HStack } from '@chakra-ui/react';
import { PortalProps } from '@packages/berish-react-portal';
import { Resource } from '@schema/api-gateway';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

export interface TradeDirectionChooseModalProps extends PortalProps<Resource.Common.TradeDirection> {}

export function TradeDirectionChooseModal({ portal }: TradeDirectionChooseModalProps) {
  const onClose = useCallback(() => {
    if (portal?.resolve) portal.resolve(null);
  }, [portal]);

  const onSubmit = useCallback(
    (direction: Resource.Common.TradeDirection) => {
      if (portal?.resolve) portal.resolve(direction);
    },
    [portal],
  );

  const modalButtons: {
    label: string;
    direction: Resource.Common.TradeDirection;
    onClick: () => void;
  }[] = [
    {
      label: 'I want to buy',
      direction: 'BUY',
      onClick: () => onSubmit('BUY'),
    },
    {
      label: 'I want to sell',
      direction: 'SELL',
      onClick: () => onSubmit('SELL'),
    },
  ];

  return (
    <UIKit.Modal
      title={
        <Text fontWeight={700} fontFamily="promo" fontSize="2md" textTransform="uppercase" color="white">
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
            bg={button.direction === 'SELL' ? 'red.950' : 'green.950'}
            _hover={{
              bg: button.direction === 'SELL' ? 'red.400' : 'green.400',
            }}
          >
            <Circle size="2.5rem" bg={button.direction === 'SELL' ? 'red.500' : 'green.500'}>
              <UIIcons.Common.DirectionIcon color="white" />
            </Circle>
            <Text fontWeight={600}>{button.label}</Text>
          </HStack>
        ))}
      </VStack>
    </UIKit.Modal>
  );
}
