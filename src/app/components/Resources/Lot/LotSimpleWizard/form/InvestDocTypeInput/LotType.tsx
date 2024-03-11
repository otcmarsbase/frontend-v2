import { FC } from 'react';

import { VStack, Text, StackProps } from '@chakra-ui/react';
import { Common } from '@shared/ui-icons';

export interface LotTypeProps extends StackProps {
  title: string;
  active?: boolean;
}

export const LotType: FC<LotTypeProps> = ({ title, active, onClick, ...stackProps }) => {
  return (
    <VStack
      w="full"
      border="1px solid"
      borderColor={active ? 'orange.300' : 'dark.800'}
      py="2"
      spacing="2"
      rounded="light"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ borderColor: 'orange.300' }}
      onClick={onClick}
      {...stackProps}
    >
      <Common.AssetIcon color="orange.300" fontSize={{ base: '1.5rem', md: '2rem' }} lineHeight={1} />
      <Text lineHeight="1" fontWeight="500">
        {title}
      </Text>
    </VStack>
  );
};
