import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const baseStyle = defineStyle({
  maxW: '85rem',
  width: '100%',
  marginLeft: '7.8rem',
});

// export the component theme
export const Container = defineStyleConfig({ baseStyle });
