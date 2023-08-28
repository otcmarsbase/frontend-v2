import { useCallback } from 'react';

import { Box, useMultiStyleConfig, ColorProps, SimpleGrid, BoxProps } from '@chakra-ui/react';

type RadioButtonsValue = string | number;

export interface RadioButtonsItem<Type extends RadioButtonsValue> {
  label: string;
  value: Type;
}

export type RadioButtonsVariant = 'solid' | 'outline';

export interface RadioButtonsProps<T> extends Omit<BoxProps, 'onChange'> {
  items: readonly T[] | T[];
  renderKey: (item: T, index: number) => React.Key;
  renderItem: (item: T, index: number) => React.ReactNode;
  renderColorByValue?: (item: T, index: number) => ColorProps['color'];
  isEqualsItems?: (item1: T, item2: T) => boolean;

  value: T;
  onChange?: (value: T, index: number) => void;
  variant?: RadioButtonsVariant;
}

export function RadioButtons<T>({
  items,
  renderKey,
  renderItem,
  isEqualsItems = (item1, item2) => Object.is(item1, item2),
  value,
  onChange,
  variant,
  renderColorByValue,
  ...boxProps
}: RadioButtonsProps<T>) {
  const styles = useMultiStyleConfig('RadioButtons', {
    variant,
    ...boxProps,
  });

  const _renderKey = useCallback(
    (item: T, index: number) => {
      if (renderKey) return renderKey(item, index);
      return index;
    },
    [renderKey],
  );

  const _renderItem = useCallback(
    (item: T, index: number) => {
      if (renderItem) return renderItem(item, index);

      return String(item);
    },
    [renderItem],
  );

  const _isActive = useCallback(
    (item: T, index: number) => {
      return isEqualsItems(item, value);
    },
    [isEqualsItems, value],
  );

  const _renderColorByValue = useCallback(
    (item: T, index: number) => {
      if (renderColorByValue) return renderColorByValue(item, index);
      return void 0;
    },
    [renderColorByValue],
  );

  const _onChange = useCallback(
    (item: T, index: number) => {
      if (onChange) onChange(item, index);
    },
    [onChange],
  );

  return (
    <Box __css={styles.container} {...boxProps}>
      <SimpleGrid columns={items.length}>
        {items.map((item, index) => {
          const key = _renderKey(item, index);
          const renderItem = _renderItem(item, index);
          const isActive = _isActive(item, index);
          const color = _renderColorByValue(item, index);

          return (
            <Box
              key={key}
              __css={{
                ...styles.item,
                ...(isActive
                  ? {
                      ...styles.itemActive,
                      ...(color ? { bg: color } : {}),
                    }
                  : {}),
              }}
              onClick={() => _onChange(item, index)}
            >
              {renderItem}
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}