import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

export const radioButtonsParts = [
  'container',
  'item',
  'itemActive',
  'grid',
] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioButtonsParts);

const baseStyle = definePartsStyle({
  container: {
    background: 'dark.800',
    borderRadius: '0.5rem',
    display: 'flex',
    py: '0.25rem',
    px: '0.5rem',
    justifyContent: 'center',
  },
  grid: {
    display: 'grid',
  },
  item: {
    textAlign: 'center',
    cursor: 'pointer',
    padding: '0.5rem 3.44rem',
    fontSize: 'sm',
    fontWeight: 600,
    color: 'dark.50',
    flexShrink: '0',
    borderRadius: '0.38rem',
    border: '0.125rem solid',
    maxW: '10.3rem',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'transparent',
  },
  itemActive: {
    color: 'white',
    borderColor: 'orange.500',
  },
});

const variants = {
  solid: {
    itemActive: defineStyle({
      bg: 'orange.500',
      border: '0.125rem solid',
      borderColor: 'transparent',
    }),
  },
  outline: {
    itemActive: defineStyle({
      borderColor: 'orange.500',
    }),
  },
};

export const RadioButtons = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: { size: 'sm' },
});
