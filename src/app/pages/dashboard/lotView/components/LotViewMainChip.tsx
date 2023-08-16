import { LOT_VIEW_MAIN_CHIP_FIELDS } from '@app/pages/dashboard/lotView/consts';
import { Box, Heading, HStack, VStack } from '@chakra-ui/react';

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
      <Heading variant="h5" color="dark.50" fontWeight="600">
        {LOT_VIEW_MAIN_CHIP_FIELDS[field.id]}
      </Heading>
      {field.id === 'typeOfBidder' ? (
        <Heading variant="h5" color="orange.400">
          {field.value}
        </Heading>
      ) : (
        <HStack alignItems="baseline">
          <Heading variant="h5" fontWeight="500">
            {field.value.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </Heading>
          <Box color="dark.50">$</Box>
        </HStack>
      )}
    </VStack>
  );
};
