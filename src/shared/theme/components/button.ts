import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const baseStyle = defineStyle({
  fontSize: 'sm',
  fontWeight: 800,
});

const variants = {
  solid: defineStyle({
    background: 'orange.500',
  }),
};

// export the component theme
export const Button = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'solid',
  },
});
