import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

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
  p: '1rem',
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
  xs,
  sm,
  md,
  lg,
};

const baseStyle = defineStyle({
  color: 'dark.200', // change the input text color
  transition: 'color 0.4s, border-color 0.4s',
  _placeholder: {
    transition: 'opacity 0.3s',
    opacity: 1,
  },
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
    _placeholder: {
      opacity: 0,
    },
  },
});

export const Textarea = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    outline: {
      border: '0.125rem solid',
    },
    ghost: {
      border: 'none',
      background: 'rgba(255, 255, 255, 0.05)',
    },
  },
  defaultProps: { size: 'sm' },
});
