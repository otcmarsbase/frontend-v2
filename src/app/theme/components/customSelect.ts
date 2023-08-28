import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

export const CustomSelectParts = [
  'container',
  'menu',
  'option',
  'divider',
  'menuList',
  'optionSelected',
] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(CustomSelectParts);

const baseStyle = definePartsStyle({
  container: {
    width: '100%',
  },
  divider: {
    display: 'none',
  },
  menu: {
    background: 'dark.700',
    borderRadius: '0.5rem',
  },
  option: {
    background: 'dark.700',
    position: 'relative',
    height: '2.25rem',
    p: '0 1rem',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.05)',
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
