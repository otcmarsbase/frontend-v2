import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// define the base component styles
const baseStyle = defineStyle({
  background: 'orange.500',
  borderRadius: '62.5rem',
  padding: '0.15rem 0.75rem',
  textTransform: 'normal',
  fontWeight: 800,
  fontSize: 'sm',
});

// export the component theme
export const Badge = defineStyleConfig({ baseStyle });
