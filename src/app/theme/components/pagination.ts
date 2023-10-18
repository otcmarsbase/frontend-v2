import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

export const paginationAnatomy = ['container', 'page', 'activePage', 'pageControl', 'buttonGroup'] as const;

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(paginationAnatomy);

const baseStyle = definePartsStyle({
  container: {
    display: 'flex',
    width: 'full',
    fontSize: 'sm',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: '2.75rem',
    gap: '1rem',
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
    justifyContent: 'center',
    flexGrow: 1,
  },
});

export const Pagination = defineMultiStyleConfig({
  baseStyle,
});
