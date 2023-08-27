import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

export const paginationAnatomy = [
  'container',
  'page',
  'activePage',
  'pageControl',
  'buttonGroup',
] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(paginationAnatomy);

const baseStyle = definePartsStyle({
  container: {
    display: 'flex',
    width: 'full',
    fontSize: 'sm',
    justifyContent: 'center',
    alignItems: 'center',
    py: '2.75rem',
  },
  page: {
    color: 'dark.50',
    width: '1.75rem',
    height: '1.75rem',
    borderRadius: '50%',
    fontWeight: 500,
  },
  activePage: {
    bg: 'orange.500',
    color: 'white',
  },
  pageControl: {
    color: 'dark.50',
    fontWeight: 500,
  },
  buttonGroup: {
    gap: '0.25rem',
  },
});

export const Pagination = defineMultiStyleConfig({
  baseStyle,
});
