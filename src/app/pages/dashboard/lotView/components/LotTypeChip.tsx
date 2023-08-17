import { getTypeOfDealChipColors } from '@app/pages/dashboard/lotView/utils';
import { Box, Heading } from '@chakra-ui/react';

export const LotTypeChip = ({ lotType }) => {
  return (
    <Box
      textTransform="uppercase"
      padding="0.125rem 0.5rem"
      borderRadius="6.25rem"
      bg={getTypeOfDealChipColors({ lotType })}
    >
      <Heading variant="h6">{lotType}</Heading>
    </Box>
  );
};
