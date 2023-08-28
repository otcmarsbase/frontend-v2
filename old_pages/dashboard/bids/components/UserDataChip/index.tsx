import { Box, HStack, Img } from '@chakra-ui/react';

export const UserDataChip = ({ offerMaker, offerMakerIcon }) => {
  return (
    <HStack gap="0.25rem">
      <Box fontWeight="500" fontSize="sm">
        <Img src={null} alt={'1'} />
      </Box>
      <Box whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
        {offerMaker}
      </Box>
    </HStack>
  );
};
