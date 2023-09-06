import { HStack, Text, VStack } from '@chakra-ui/react';

import { MainChipFieldType, MainChipFieldTypeTitleMap } from './const';

interface RoundInfoItemProps {
  fieldName: MainChipFieldType;
  children: React.ReactNode;
}

export const RoundInfoItem: React.FC<RoundInfoItemProps> = ({ fieldName, children }) => {
  return (
    <VStack alignItems="start" bg="dark.900" borderRadius="sm" p="0.5rem 1.25rem">
      <HStack alignItems="center" opacity="0.6">
        <Text fontSize="sm" fontWeight="600" color="dark.50">
          {MainChipFieldTypeTitleMap.get(fieldName)}
        </Text>
      </HStack>
      {children}
    </VStack>
  );
};
