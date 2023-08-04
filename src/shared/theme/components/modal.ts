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
    border: '2px solid',
    borderColor: 'dark.500',
    borderRadius: '1rem',
  },
  closeButton: {
    top: '2rem',
    right: '2rem',
    color: 'dark.300',
  },
});

export const Modal = defineMultiStyleConfig({
  baseStyle,
});
