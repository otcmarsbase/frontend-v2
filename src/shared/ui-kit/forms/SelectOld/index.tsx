import { useMultiStyleConfig } from '@chakra-ui/react';
import { Select as ChakraSelect, Props as ChakraSelectProps } from 'chakra-react-select';

export const Select: typeof ChakraSelect<any> = (selectProps) => {
  const styles = useMultiStyleConfig('CustomSelect', selectProps);

  return (
    <ChakraSelect
      {...selectProps}
      chakraStyles={{
        indicatorSeparator: (css) => ({
          ...css,
          ...styles.divider,
        }),
        container: (css) => ({
          ...css,
          ...styles.container,
        }),
        option: (css, state) => {
          return {
            ...css,
            ...styles.option,
            ...(state.isSelected ? styles.optionSelected : {}),
          };
        },
        menu: (css) => ({
          ...css,
          ...styles.menu,
        }),
        menuList: (css) => ({
          ...css,
          ...styles.menuList,
        }),
      }}
    />
  );
};