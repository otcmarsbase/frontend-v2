import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  sm: defineStyle({
    maxWidth: '50%',
  }),
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
  p: '1rem',
  width: '100%',
  margin: '0 auto',
});

// export the component theme
export const Container = defineStyleConfig({ baseStyle, sizes, defaultProps: { size: 'lg' } });
