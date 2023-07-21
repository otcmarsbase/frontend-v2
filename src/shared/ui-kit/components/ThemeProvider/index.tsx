import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from '@shared/theme';
import { FixFocusVisible } from '../FixFocusVisible';
import { FontsInjection } from '../FontsInjection';

export interface ThemeProviderProps extends React.PropsWithChildren {}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      {FontsInjection}
      {FixFocusVisible}
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </>
  );
};
