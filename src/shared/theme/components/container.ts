import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const baseStyle = defineStyle({
  maxWidth: '85%',
  width: '100%',
  margin: '0 auto',
  // marginLeft: '7.8rem',
});

// export the component theme
export const Container = defineStyleConfig({ baseStyle });
