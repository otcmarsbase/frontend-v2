import theme from '@app/theme';
import { ChakraBaseProvider } from '@chakra-ui/react';

import { FixFocusVisible } from './FixFocusVisible';
import { FontsInjection } from './FontsInjection';
import { ScrollbarStyles } from './ScrollbarStyles';

export interface ThemeProviderProps extends React.PropsWithChildren {}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      {FontsInjection}
      {FixFocusVisible}
      {ScrollbarStyles}
      <ChakraBaseProvider
        toastOptions={{
          defaultOptions: {
            position: 'bottom-left',
            duration: 3000,
            isClosable: true,
          },
        }}
        theme={theme}
      >
        {children}
      </ChakraBaseProvider>
    </>
  );
};
