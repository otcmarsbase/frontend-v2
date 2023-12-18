import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

export const radioButtonsParts = ['container', 'item', 'itemActive', 'isInvalid'] as const;

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioButtonsParts);

const baseStyle = definePartsStyle({
  container: {
    position: 'relative',
    background: 'dark.800',
    borderRadius: '0.5rem',
    w: 'full',
    py: '0.25rem',
    px: '0.5rem',
    _before: {
      opacity: '0',
      transition: 'all 0.4s',
      content: '""',
      position: 'absolute',
      left: '-0.25rem',
      top: '-0.25rem',
      right: '-0.25rem',
      bottom: '-0.25rem',
      border: '0.25rem solid',
      borderColor: 'red.500',
      borderRadius: 'sm',
    },
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
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'transparent',
  },
  itemActive: {
    color: 'white',
    borderColor: 'orange.500',
  },
  isInvalid: {
    _before: {
      opacity: '1',
      transition: 'all 0.4s',
      content: '""',
      position: 'absolute',
      left: '-0.25rem',
      top: '-0.25rem',
      right: '-0.25rem',
      bottom: '-0.25rem',
      border: '0.25rem solid',
      borderColor: 'red.500',
      borderRadius: 'sm',
    },
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
  bordered: {
    container: {
      p: '0.125rem',
    },
  },
};

export const RadioButtons = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: { size: 'sm' },
});
