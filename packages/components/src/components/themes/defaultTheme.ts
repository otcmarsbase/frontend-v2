import { extendBaseTheme } from '@chakra-ui/react';
import chakraTheme, { ChakraTheme } from '@chakra-ui/theme';
import { ButtonTheme } from '../button/Button.theme';
import { CheckboxTheme } from '../checkbox/Checkbox.theme';

const darkTheme: Partial<ChakraTheme> = {
  styles: {
    global: {
      html: {
        // Ставим базовый размер 1rem = 16px
        fontSize: '16px',
      },
    },
  },
  components: {
    Button: ButtonTheme,
    Checkbox: CheckboxTheme
  },
  fonts: {
    body: `'Inter Variable', sans-serif`,
    menuItem: `'EurofontExtended', sans-serif`,
  },
  colors: {
    ...chakraTheme.colors,
    dark: {
      900: '#0B0B0B',
    },
  },
};

export default extendBaseTheme(darkTheme) as typeof darkTheme;
