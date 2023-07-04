import { createContext, useContext } from 'react';
import { useTheme as useChakraTheme } from '@chakra-ui/react';
import { ThemeName } from '../components/themeProvider';

export type ThemeContextValue = {
  themeName: ThemeName;
  setNameTheme: (themeName: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  themeName: 'defaultTheme',
  setNameTheme: () => {
    return;
  },
});

export const useTheme = () => {
  const { themeName, setNameTheme } = useContext(ThemeContext);
  const theme = useChakraTheme();

  return {
    themeName,
    theme,
    changeTheme: setNameTheme,
  };
};
