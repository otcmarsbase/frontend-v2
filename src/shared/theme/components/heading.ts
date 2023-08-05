import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const md = defineStyle({
  fontSize: '2md',
});

export const Heading = defineStyleConfig({
  baseStyle: {},
  variants: {
    pageHeader: defineStyle({
      size: '2md',
      fontFamily: 'promo',
    }),
  },
  sizes: { md },
});
