import { HStack, Text } from '@chakra-ui/react';

import { LotInfoFieldDictionary, LotInfoFieldType } from './const';

interface LotInfoItemProps {
  fieldName: LotInfoFieldType;
  children: React.ReactNode;
}

export const LotInfoItem: React.FC<LotInfoItemProps> = ({ fieldName, children }) => {
  return (
    <HStack alignItems="center" w="full" justifyContent="space-between">
      <Text fontSize="sm" fontWeight="600" color="dark.50">
        {LotInfoFieldDictionary.get(fieldName)}
      </Text>
      {children}
    </HStack>
  );
};
