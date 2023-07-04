import { useState } from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { ThemeContext } from '../../hooks/useTheme';
import { CustomFontsInjection } from '../fonts';
import * as themes from '../themes';

export type ThemeName = keyof typeof themes;

export interface ThemeProviderProps extends React.PropsWithChildren {
  defaultThemeName?: ThemeName;
}

export const ThemeProvider = ({
  defaultThemeName = 'defaultTheme',
  children,
}: ThemeProviderProps) => {
  const [themeName, setNameTheme] = useState<ThemeName>(defaultThemeName);

  return (
    <ThemeContext.Provider value={{ themeName, setNameTheme }}>
      <ChakraBaseProvider theme={themes[themeName]}>
        {children}
      </ChakraBaseProvider>
      <CustomFontsInjection />
    </ThemeContext.Provider>
  );
};
