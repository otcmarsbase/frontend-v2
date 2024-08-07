import { useMemo } from 'react';

import { useMultiStyleConfig } from '@chakra-ui/react';
import { Select as ChakraSelect, Props as ChakraSelectProps, OnChangeValue, GroupBase } from 'chakra-react-select';

import { SelectViewProps, MultiDependentValue } from './types';

export interface SelectDefaultViewProps<T, M extends boolean>
  extends SelectViewProps<T, M>,
    Omit<
      ChakraSelectProps<Option, M, GroupBase<Option>>,
      'options' | 'onChange' | 'isDisabled' | 'isLoading' | 'placeholder' | 'isClearable' | 'isInvalid' | 'isMulti'
    > {}

interface Option {
  label: React.ReactNode;
  value: string;
}

export function SelectDefaultView<T, M extends boolean>(props: SelectDefaultViewProps<T, M>) {
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
    isMulti,
    ...selectViewOptions
  } = props;
  const styles = useMultiStyleConfig('CustomSelect', selectViewOptions);

  const chakraOptions = useMemo<Option[]>(
    () => options.map((option) => ({ value: option.key, label: renderOption(option) })),
    [options, renderOption],
  );

  const value = useMemo(() => {
    if (!selectedOption) return null;

    if (Array.isArray(selectedOption)) {
      return selectedOption.map((option) => ({ value: option.key, label: renderOption(option) }));
    }

    return { value: selectedOption.key, label: renderOption(selectedOption) };
  }, [selectedOption, renderOption]);

  const handleChange = (newValue: OnChangeValue<Option, M>) => {
    if (Array.isArray(newValue)) {
      const values = newValue.map((item) => item?.value).filter(Boolean);
      onChange(values as MultiDependentValue<string, M>);
      return;
    }

    onChange(newValue?.['value'] as MultiDependentValue<string, M>);
  };

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
        control: (css) => ({
          ...css,
          ...styles.control,
        }),
      }}
      isInvalid={isInvalid}
      isClearable={isClearable}
      isMulti={isMulti}
      placeholder={placeholder}
      // Values
      filterOption={defaultFilterOption}
      options={chakraOptions}
      onChange={handleChange}
      // Search
      isSearchable={!!search}
      inputValue={search?.value || ''}
      onInputChange={search?.onSearch}
      value={value}
      {...selectViewOptions}
    />
  );
}

const defaultFilterOption = () => true;
