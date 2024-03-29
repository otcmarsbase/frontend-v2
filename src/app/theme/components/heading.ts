import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const md = defineStyle({
  fontSize: '2md',
});
//todo replace headings
const variants = {
  h2: defineStyle({
    fontSize: '2rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '2.375rem',
  }),
  h3m: defineStyle({
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '2rem',
    letterSpacing: '-0.015rem',
  }),
  h3: defineStyle({
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1.5rem',
  }),
  h4m: defineStyle({
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '1.5rem',
  }),
  h4: defineStyle({
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '1.25rem',
  }),
  h5: defineStyle({
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.5rem',
  }),
  h6: defineStyle({
    fontSize: '0.625rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '1rem',
    letterSpacing: '-0.00625rem',
  }),
  pageHeader: defineStyle({
    size: '2md',
    fontFamily: 'promo',
  }),
};

export const Heading = defineStyleConfig({
  variants,
  baseStyle: {
    fontFamily: 'promo',
  },
  sizes: { md },
});
