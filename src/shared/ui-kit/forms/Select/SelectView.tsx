import * as React from 'react';

import {
  chakra,
  FormControlOptions,
  HStack,
  HTMLChakraProps,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  omitThemingProps,
  ThemingProps,
  useFormControl,
  useMergeRefs,
  useMultiStyleConfig,
  usePopper,
} from '@chakra-ui/react';
import { mergeWith } from '@chakra-ui/utils';
import { UIIcons } from '@shared/ui-icons';
import { useSelect } from 'downshift'; // using version 6.1.3

import { Empty } from '../../display/Empty';

import { SelectOption } from './_Options';

export interface SelectViewProps
  extends FormControlOptions,
    ThemingProps<'Select'>,
    Omit<HTMLChakraProps<'button'>, 'disabled' | 'required' | 'readOnly' | 'size' | 'value' | 'onChange' | 'children'> {
  keys?: string[];
  selectedKey?: string | null | undefined;
  loading?: boolean;
  header?: React.ReactNode;
  placeholder?: string;
  empty?: React.ReactNode;
  onChange?: (key: string | null | undefined) => void;
  renderKey?: (key: string, index: number) => React.ReactNode;
  renderInputValue?: (key: string) => string;
  renderInputIcon?: (key: string) => React.ReactNode;
  children?: (props: SelectViewChildrenProps) => React.ReactNode;
  size?: InputProps['size'];
}

export interface SelectViewChildrenProps {
  keys: string[];
  renderOption: (key: string, index: number) => React.ReactNode;
  renderOptions: React.ReactNode[];
}

export const SelectView = React.forwardRef<HTMLButtonElement, SelectViewProps>((props, ownRef) => {
  const {
    id,
    selectedKey,
    renderKey,
    renderInputValue,
    renderInputIcon,
    header,
    placeholder,
    empty = <Empty />,
    children = defaultChildren,
    keys,
    onChange,
    loading,
    onBlur,
    ...rest
  } = omitThemingProps(props);
  const ownButtonProps = useFormControl<HTMLButtonElement>(rest);
  const styles = useMultiStyleConfig('CustomSelect', props);

  const { isOpen, selectedItem, getToggleButtonProps, getMenuProps, getItemProps } = useSelect({
    id,
    items: keys,
    selectedItem: selectedKey,
    onSelectedItemChange: (val) => onChange?.(val.selectedItem),
  });

  const { referenceRef: popperRef, getPopperProps } = usePopper({
    enabled: isOpen,
    gutter: 2,
  });
  const { ref: useSelectToggleButtonRef, ...useSelectToggleButtonProps } = getToggleButtonProps();

  const toggleButtonRef = useMergeRefs(ownRef, useSelectToggleButtonRef, popperRef);
  const toggleButtonProps = mergeWith(ownButtonProps, useSelectToggleButtonProps);

  const popperProps = mergeWith({ style: getPopperProps({ onBlur }) }.style, {
    style: { visibility: isOpen ? 'visible' : 'hidden' },
  });

  const selectedInputValue = React.useMemo(() => {
    const selectedItemIndex = keys.findIndex((m) => m === selectedItem);
    if (selectedItemIndex === -1) return null;

    return renderInputValue
      ? renderInputValue(keys[selectedItemIndex])
      : renderKey(keys[selectedItemIndex], selectedItemIndex);
  }, [keys, renderInputValue, renderKey, selectedItem]);

  const selectedIcon = React.useMemo(() => {
    const selectedItemIndex = keys.findIndex((m) => m === selectedItem);
    if (selectedItemIndex === -1) return null;

    return renderInputIcon ? renderInputIcon(keys[selectedItemIndex]) : null;
  }, [keys, renderInputIcon, selectedItem]);

  const renderOption = React.useCallback(
    (key: string, index: number) => {
      return (
        <SelectOption key={index} value={String(index)} __css={styles.option} {...getItemProps({ item: key, index })}>
          {renderKey ? renderKey(key, index) : String(key)}
        </SelectOption>
      );
    },
    [renderKey, getItemProps, styles],
  );

  const input = (
    <Input
      ref={toggleButtonRef}
      placeholder={placeholder}
      {...toggleButtonProps}
      value={selectedInputValue}
      size={props.size}
      readOnly
    />
  );

  return (
    <chakra.div position="relative">
      <InputGroup>
        {selectedIcon && <InputLeftElement>{selectedIcon}</InputLeftElement>}
        {input}
        <InputRightElement>
          <UIIcons.Common.ArrowDown
            color="orange.500"
            transition="all 0.2s"
            transform={isOpen ? 'rotate(180deg)' : 'initial'}
          />
        </InputRightElement>
      </InputGroup>
      <chakra.div zIndex="1" minW={toggleButtonProps.width} maxW="100%" w="100%" {...popperProps}>
        <chakra.ul __css={styles.menu} data-focus-visible-added={isOpen} {...getMenuProps()}>
          {header && (
            <HStack py="2" px="4">
              {header}
            </HStack>
          )}
          {keys.length > 0
            ? isOpen &&
              children({ keys, renderOption, renderOptions: keys.map((key, index) => renderOption(key, index)) })
            : empty}
        </chakra.ul>
      </chakra.div>
    </chakra.div>
  );
});

const defaultChildren = ({ renderOptions }: SelectViewChildrenProps) => {
  return <>{renderOptions}</>;
};
