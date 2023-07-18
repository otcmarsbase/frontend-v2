import { extendTheme } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import * as components from './components';
import * as foundations from './foundations';

export default extendTheme({
  ...foundations,
  components: { ...components },
  space: {
    '4.5': '1.125rem',
  },
});
