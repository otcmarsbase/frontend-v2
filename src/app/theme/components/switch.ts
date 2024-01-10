import { switchAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  thumb: {
    bg: 'white',
  },
  track: {
    bg: 'dark.800',
    _checked: {
      bg: 'orange.500',
    },
  },
});

export const Switch = defineMultiStyleConfig({
  baseStyle,
});
