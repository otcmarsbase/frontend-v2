import { defineStyle } from '@chakra-ui/react';

export default defineStyle({
  global: {
    html: {
      // Ставим базовый размер 1rem = 16px
      fontSize: '16px',
    },
    body: {
      background: 'dark.950',
      color: 'white',
    },
  },
});
