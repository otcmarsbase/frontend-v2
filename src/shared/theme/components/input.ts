import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

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
  xs: definePartsStyle({ field: xs, addon: xs }),
  sm: definePartsStyle({ field: sm, addon: sm }),
  md: definePartsStyle({ field: md, addon: md }),
  lg: definePartsStyle({ field: lg, addon: lg }),
};

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    color: 'dark.200', // change the input text color
    transition: 'color 0.4s, border-color 0.4s',
    _focusVisible: {
      color: 'none',
      shadow: 'outline',
    },
    _hover: {
      color: 'white',
    },
    _focus: {
      color: 'white',
      borderColor: 'orange.500',
      shadow: 'none !important',
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
  },
  defaultProps: { size: 'md' },
});
