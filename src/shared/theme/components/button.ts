import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  '2xs': defineStyle({
    h: '1.5rem',
    fontSize: 'xs',
  }),
  xs: defineStyle({
    h: '2rem',
    fontSize: 'xs',
    borderRadius: 'light',
  }),
  sm: defineStyle({
    h: '2.5rem',
    fontSize: 'xs',
  }),
  md: defineStyle({
    h: '3rem',
    fontSize: 'sm',
  }),
  lg: defineStyle({
    h: '3.5rem',
    fontSize: 'sm',
  }),
  xl: defineStyle({
    h: '4rem',
    fontSize: 'sm',
  }),
};

// define the base component styles
const baseStyle = defineStyle({
  borderRadius: 'base',
  fontSize: 'sm',
  fontWeight: 600,
  _disabled: {
    bg: 'dark.600',
  },
});

const variants = {
  solid: defineStyle({
    background: 'orange.500',
  }),
  darkOutline: defineStyle({
    border: '2px solid',
    borderColor: 'dark.700',
    color: 'white',
    _hover: {
      bg: 'dark.700',
    },
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
