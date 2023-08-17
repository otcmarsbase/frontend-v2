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
    zIndex: 'initial',
    ':after': {
      position: 'absolute',
      left: '-0.125rem',
      right: '-0.125rem',
      top: '-0.125rem',
      bottom: '-0.125rem',
      content: '""',
      zIndex: -1,
      borderRadius: 'inherit',
      bgGradient: 'linear(215deg, #212124 0%, #4D4F56 47.40%, #1E2022 100%)',
    },
  }),
  brandGradientBordered: defineStyle({
    position: 'relative',
    borderRadius: '1rem',
    border: 'solid 0.125rem transparent',
    background: 'dark.900',
    backgroundClip: 'padding-box',
    padding: '2rem',
    zIndex: 'initial',
    ':after': {
      position: 'absolute',
      left: '-0.125rem',
      right: '-0.125rem',
      top: '-0.125rem',
      bottom: '-0.125rem',
      content: '""',
      zIndex: -1,
      borderRadius: 'inherit',
      bgGradient:
        'linear(129deg, #8A67FF 0%, #49D4FF 31.71%, #FE673C 63.71%, #A6498F 100%)',
    },
  }),
  brandLinearGradient: {
    bgGradient: 'linear(140deg, #FF6639 0%, #7E25B5 100%)',
  },
  grayRadiiArea: {
    padding: '1.25rem',
    width: 'full',
    borderRadius: 'xs',
    bg: 'dark.800',
  },
});
