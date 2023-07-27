import { Box, BoxProps } from '@chakra-ui/react';

export const FormWrapper = (boxProps: BoxProps) => {
  return (
    <Box
      width="100%"
      background="dark.900"
      borderRadius="1rem"
      padding="2rem"
      {...boxProps}
    />
  );
};
