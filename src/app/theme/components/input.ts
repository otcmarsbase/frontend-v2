import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const xs = defineStyle({
  fontSize: 'sm',
  height: '2.5rem',
  borderRadius: '0.5rem',
  px: '0.75rem',
  border: '2px solid',
});

const sm = defineStyle({
  fontSize: 'sm',
  height: '3rem',
  borderRadius: '0.5rem',
  px: '1rem',
});

const md = defineStyle({
  fontSize: 'sm',
  height: '3.5rem',
  borderRadius: '0.5rem',
  px: '1rem',
});

const lg = defineStyle({
  fontSize: 'sm',
  height: '4rem',
  borderRadius: '0.5rem',
  px: '1rem',
});

const sizes = {
  xs: definePartsStyle({ field: xs, addon: xs, element: { fontSize: 'md' } }),
  sm: definePartsStyle({ field: sm, addon: sm, element: { fontSize: 'lg' } }),
  md: definePartsStyle({ field: md, addon: md, element: { fontSize: 'lg' } }),
  lg: definePartsStyle({ field: lg, addon: lg, element: { fontSize: 'lg' } }),
};

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    color: 'dark.200', // change the input text color
    transition: 'color 0.4s, border-color 0.4s',
    _placeholder: {
      transition: 'opacity 0.3s',
      opacity: 1,
    },
    _groupFocusVisible: {
      color: 'none',
      shadow: 'outline',
    },
    _groupHover: {
      color: 'white',
    },
    _groupFocusWithin: {
      color: 'white',
      borderColor: 'orange.500',
      shadow: 'none !important',
      _placeholder: {
        opacity: 0,
      },
    },
    _autofill: {
      transition: 'background-color 0s 600000s, color 0s 600000s',
    },
  },
  element: {
    color: 'dark.200',
    transition: 'color 0.4s, border-color 0.4s',
    _groupHover: {
      color: 'white',
    },
    _groupFocusWithin: {
      color: 'white',
    },
  },
});

export const Input = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: {
    outline: {
      field: {
        border: '2px solid',
      },
    },
    ghost: {
      field: {
        border: 'none',
        background: 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  defaultProps: { size: 'sm' },
});
