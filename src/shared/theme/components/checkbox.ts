import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  label: {
    fontSize: 'sm',
    transition: 'all 0.2s',
    _disabled: {
      color: 'white',
    },
  },
  container: {
    _disabled: {
      pointerEvents: 'none',
      'span[class^=chakra-checkbox__control][data-checked]': {
        background: 'dark.200',
      },
    },
    _hover: {
      'span[class^=chakra-checkbox__control]:not([data-checked])': {
        borderColor: 'orange.800',
        background: 'dark.800',
      },
      'span[class^=chakra-checkbox__label]:not([data-checked])': {
        opacity: 0.8,
      },
    },
  },
  control: {
    width: '1.125rem',
    height: '1.125rem',
    borderRadius: '0.1875rem',
    border: '2px solid',
    borderColor: 'dark.200',
    background: 'dark.300',
    transition: 'all 0.2s',
    _hover: {
      borderColor: 'orange.800',
      background: 'dark.800',
    },
    _checked: {
      borderColor: 'orange.500',
      background: 'orange.500',
      _hover: {
        borderColor: 'orange.500',
        background: 'orange.500',
      },
    },
    _disabled: {
      borderColor: 'dark.200',
      background: 'dark.300',
      opacity: 0.3,
    },
  },
});

export const Checkbox = defineMultiStyleConfig({ baseStyle });
