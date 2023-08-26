import { Box, BoxProps } from '@chakra-ui/react';

export const FormSection = (boxProps: BoxProps) => {
  return (
    <Box
      width="full"
      background="dark.900"
      padding="2rem 1.5rem"
      borderRadius="0.65rem"
      layerStyle="darkLinearGradientBg"
      {...boxProps}
    />
  );
};
