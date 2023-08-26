import { Box, BoxProps } from '@chakra-ui/react';

export const FormWrapper = (boxProps: BoxProps) => {
  return (
    <Box
      width="full"
      background="dark.900"
      borderRadius="1rem"
      padding="2rem"
      {...boxProps}
    />
  );
};
