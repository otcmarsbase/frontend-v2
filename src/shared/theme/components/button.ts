import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  '2xs': defineStyle({
    h: '1.5rem',
  }),
  xs: defineStyle({
    h: '2rem',
  }),
  sm: defineStyle({
    h: '2.5rem',
  }),
  md: defineStyle({
    h: '3rem',
  }),
  lg: defineStyle({
    h: '3.5rem',
  }),
  xl: defineStyle({
    h: '4rem',
  }),
};

// define the base component styles
const baseStyle = defineStyle({
  fontSize: 'sm',
  fontWeight: 800,
  _disabled: {
    bg: 'dark.600',
  },
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
  sizes,
  defaultProps: {
    variant: 'solid',
  },
});
