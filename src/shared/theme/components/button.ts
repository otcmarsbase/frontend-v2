import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  '2xs': defineStyle({
    h: '1.5rem',
    fontSize: 'md',
  }),
  xs: defineStyle({
    h: '2rem',
    fontSize: 'md',
  }),
  sm: defineStyle({
    h: '2.5rem',
    fontSize: 'md',
  }),
  md: defineStyle({
    h: '3rem',
    fontSize: 'md',
  }),
  lg: defineStyle({
    h: '3.5rem',
    fontSize: 'md',
  }),
  xl: defineStyle({
    h: '4rem',
    fontSize: 'md',
  }),
};

// define the base component styles
const baseStyle = defineStyle({
  fontSize: 'md',
  fontWeight: 600,
  _disabled: {
    bg: 'dark.600',
  },
});

const variants = {
  solid: defineStyle({
    background: 'orange.500',
  }),
  brand: defineStyle({
    layerStyle: 'brandLinearGradient',
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
