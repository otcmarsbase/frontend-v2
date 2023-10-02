import { Box, BoxProps, HStack, Text } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';
import { Range } from 'react-calendar/dist/cjs/shared/types';

export interface DateDetailsProps extends BoxProps {
  value: Date | Range<Date>;
}

export const TimePicker: React.FC<DateDetailsProps> = ({ value, ...props }) => {
  return (
    <Box padding="0.5rem" borderTop="1px solid" borderBottom="1px solid" borderColor="whiteAlpha.500" {...props}>
      <Box maxW="14rem" mx="auto">
        <HStack alignItems="center">
          <UIIcons.Common.DateIcon color="whiteAlpha.500" />
          <Text fontSize="sm"></Text>
        </HStack>
      </Box>
    </Box>
  );
};
