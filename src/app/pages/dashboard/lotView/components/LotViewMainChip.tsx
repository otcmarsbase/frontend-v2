import { Box, HStack, VStack, Text } from '@chakra-ui/react';

import { LOT_VIEW_MAIN_CHIP_FIELDS } from '../consts';

export const LotViewMainChip = ({ field }) => {
  return (
    <VStack
      w="100%"
      padding="0.75rem 1.25rem"
      borderRadius="0.5rem"
      alignItems="flex-start"
      bg="dark.900"
      color="white"
      gap="0.25rem"
      flex={1}
    >
      <Text color="dark.50" fontSize="sm" fontWeight="600">
        {LOT_VIEW_MAIN_CHIP_FIELDS[field.id]}
      </Text>
      {field.id === 'typeOfBidder' ? (
        <Text fontSize="sm" color="orange.400">
          {field.value}
        </Text>
      ) : (
        <HStack alignItems="baseline">
          <Text fontSize="sm" variant="h5" fontWeight="500">
            {field.value.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </Text>
          <Box color="dark.50">$</Box>
        </HStack>
      )}
    </VStack>
  );
};
