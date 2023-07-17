import { ChakraBaseProvider } from '@chakra-ui/react';
import theme from '@shared/theme';

export interface ThemeProviderProps extends React.PropsWithChildren {}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
};
