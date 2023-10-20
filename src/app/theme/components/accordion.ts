import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    w: 'full',
    display: 'flex',
    justifyContent: 'space-between',
  },
  // define the part you're going to style
  container: {
    pt: '0.5rem',
    border: 'none',
    borderTop: '0.0625rem solid',
    borderTopColor: 'rgba(255, 255, 255, 0.15)',
  },
  root: {
    w: 'full',
  },
});

export const Accordion = defineMultiStyleConfig({ baseStyle });
