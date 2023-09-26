import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

export const CustomSelectParts = ['container', 'menu', 'option', 'divider', 'menuList', 'optionSelected'] as const;

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(CustomSelectParts);

const baseStyle = definePartsStyle({
  container: {
    width: '100%',
    textTransform: 'initial',
    fontWeight: '400',
  },
  divider: {
    display: 'none',
  },
  menu: {
    background: 'dark.700',
    borderRadius: '0.5rem',
    mt: '0.4rem',
    maxH: '15rem',
  },
  option: {
    background: 'dark.700',
    position: 'relative',
    fontSize: 'sm',
    color: 'white',
    p: '0.5rem 1rem',
    cursor: 'pointer',
    lineHeight: '1.5rem',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.05)',
      _before: {
        opacity: 1,
      },
    },
    _before: {
      content: '""',
      transition: 'opacity 0.4s',
      position: 'absolute',
      opacity: 0,
      left: 0,
      top: 0,
      bottom: 0,
      width: '0.25rem',
      bg: 'orange.500',
    },
  },
  menuList: {
    background: 'dark.700',
    shadow: 'none',
    border: 'none',
  },
  optionSelected: {
    position: 'relative',
    bg: 'yellow',
    '::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      bg: 'orange.500',
      width: '0.125rem',
      top: 0,
      bottom: 0,
      left: 0,
    },
  },
});

export const CustomSelect = defineMultiStyleConfig({
  baseStyle,
  defaultProps: { size: 'sm' },
});
