import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  md: defineStyle({
    maxWidth: '70%',
  }),
  lg: defineStyle({
    maxWidth: '85%',
  }),
};

// define the base component styles
const baseStyle = defineStyle({
  maxWidth: '85%',
  width: '100%',
  margin: '0 auto',
  // marginLeft: '7.8rem',
});

// export the component theme
export const Container = defineStyleConfig({ baseStyle, sizes, defaultProps: { size: 'lg' } });
