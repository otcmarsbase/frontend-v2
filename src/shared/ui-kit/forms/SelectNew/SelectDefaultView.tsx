import { useMemo } from 'react';

import { useMultiStyleConfig } from '@chakra-ui/react';
import { Select as ChakraSelect, Props as ChakraSelectProps } from 'chakra-react-select';

import { SelectViewProps } from './types';

export interface SelectDefaultViewProps<T>
  extends SelectViewProps<T>,
    Omit<
      ChakraSelectProps<Option>,
      'options' | 'onChange' | 'isDisabled' | 'isLoading' | 'placeholder' | 'isClearable' | 'isInvalid'
    > {}

interface Option {
  label: React.ReactNode;
  value: string;
}

export function SelectDefaultView<T>(props: SelectDefaultViewProps<T>) {
  const {
    options,
    onChange,
    renderOption,
    selectedKey,
    selectedOption,
    placeholder,
    search,
    isClearable,
    isInvalid,
    ...selectViewOptions
  } = props;
  const styles = useMultiStyleConfig('CustomSelect', selectViewOptions);

  const chakraOptions = useMemo<Option[]>(
    () => options.map((option) => ({ value: option.key, label: renderOption(option) })),
    [options, renderOption],
  );

  return (
    <ChakraSelect
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
      isInvalid={isInvalid}
      isClearable={isClearable}
      placeholder={placeholder}
      // Values
      filterOption={defaultFilterOption}
      options={chakraOptions}
      onChange={onChange && ((newValue) => onChange(newValue?.['value']))}
      // Search
      isSearchable={!!search}
      inputValue={search?.value || ''}
      onInputChange={search?.onSearch}
      {...selectViewOptions}
    />
  );
}

const defaultFilterOption = () => true;
