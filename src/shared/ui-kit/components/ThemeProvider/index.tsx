import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from '@shared/theme';
import { FontsInjection } from '../FontsInjection';

export interface ThemeProviderProps extends React.PropsWithChildren {}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <>
      {FontsInjection}
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </>
  );
};
