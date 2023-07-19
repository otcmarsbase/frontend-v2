import { defineStyle } from '@chakra-ui/react';

export default defineStyle({
  global: {
    html: {
      // Ставим базовый размер 1rem = 16px
      fontSize: '16px',
    },
    body: {
      color: 'white',
      background: 'dark.950',
    },
  },
});
