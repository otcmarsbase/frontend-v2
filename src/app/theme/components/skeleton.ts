import { defineStyle, defineStyleConfig, cssVar } from '@chakra-ui/react';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

const orange = defineStyle({
  _light: {
    [$startColor.variable]: 'colors.orange.100', //changing startColor to orange.100
    [$endColor.variable]: 'colors.orange.400', // changing endColor to orange.400
  },
  _dark: {
    [$startColor.variable]: 'colors.orange.800', //changing startColor to orange.800
    [$endColor.variable]: 'colors.orange.600', // changing endColor to orange.600
  },
});

export const Skeleton = defineStyleConfig({
  variants: { orange },
  defaultProps: {
    variant: 'orange',
  },
});
