import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/react';

const $arrowBg = cssVar('popper-arrow-bg');

const baseStyle = defineStyle({
  bg: 'dark.700',
  borderRadius: 'light',
  px: '1.25rem',
  py: '1rem',
  [$arrowBg.variable]: 'colors.dark.700',
  // hack for changing arrow borderRadius
  '& .chakra-tooltip__arrow': {
    borderTopLeftRadius: 'micro',
  },
});

export const Tooltip = defineStyleConfig({
  baseStyle,
  defaultProps: {},
});
