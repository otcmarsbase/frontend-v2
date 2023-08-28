import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'rgba(11, 11, 11, 0.60)',
    backdropFilter: 'blur(0.5rem)',
  },
  header: {
    mb: '1.25rem',
    p: 0,
  },
  body: {
    p: 0,
  },
  dialog: {
    p: '2rem',
    bg: `dark.950`,
    zIndex: 'unset',
  },
  closeButton: {
    top: '2rem',
    right: '2rem',
    color: 'dark.300',
  },
});

const variants = {
  brightDark: definePartsStyle({
    dialog: {
      layerStyle: 'darkGradientBordered',
    },
  }),
  brand: definePartsStyle({
    dialog: {
      layerStyle: 'brandGradientBordered',
    },
  }),
};

export const Modal = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'brightDark',
  },
});
