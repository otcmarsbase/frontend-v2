import { progressAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(progressAnatomy.keys);

const baseStyle = definePartsStyle({
  track: defineStyle({
    borderRadius: '6.25rem',
    w: 'full',
    bg: 'dark.600',
    overflow: 'hidden',
  }),
  filledTrack: {
    borderTopRightRadius: '0 !important',
    borderBottomRightRadius: '0 !important',
  },
});

export const Progress = defineMultiStyleConfig({
  baseStyle,
});