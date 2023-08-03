import { defineStyle } from '@chakra-ui/react';

export default defineStyle({
  darkLinearGradientBg: defineStyle({
    bgGradient: 'linear(180deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%)',
  }),
  orangeGradient: defineStyle({
    bgGradient:
      'linear(203deg, rgba(199, 74, 38, 0.20) 0%, rgba(226, 68, 0, 0.20) 45.83%, rgba(152, 24, 7, 0.20) 100%)',
    borderRadius: '0.75rem',
    padding: '1.5rem',
  }),
  darkGradientBordered: defineStyle({
    position: 'relative',
    borderRadius: '1rem',
    border: 'solid 0.125rem transparent',
    background: 'dark.900',
    backgroundClip: 'padding-box',
    padding: '2rem',
    zIndex: 'unset',
    ':before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      margin: '-0.125rem',
      borderRadius: 'inherit',
      bgGradient: 'linear(215deg, #212124 0%, #4D4F56 47.40%, #1E2022 100%)',
    },
  }),
  brandLinearGradient: {
    bgGradient: 'linear(140deg, #FF6639 0%, #7E25B5 100%)',
  },
});
