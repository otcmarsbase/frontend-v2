import { extendTheme, theme } from '@chakra-ui/react';

import 'focus-visible/dist/focus-visible';
import { ThemeTypings as ProjectThemeTypings } from '../../../theme-typings';

import * as components from './components';
import * as foundations from './foundations';

theme.breakpoints = undefined;

export default extendTheme({
  ...foundations,
  components: { ...components },
  space: {
    '4.5': '1.125rem',
  },
});

declare module '@chakra-ui/react' {
  interface ThemeTypings extends ProjectThemeTypings {}
}
