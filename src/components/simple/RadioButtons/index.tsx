import {
  Box,
  useMultiStyleConfig,
  ColorProps,
  SimpleGrid,
  BoxProps,
} from '@chakra-ui/react';

type RadioButtonsValue = string | number;

export interface RadioButtonsItem<Type extends RadioButtonsValue> {
  label: string;
  value: Type;
}

export type RadioButtonsVariant = 'solid' | 'outline';

export interface RadioButtonsProps<T extends RadioButtonsValue>
  extends Omit<BoxProps, 'onChange'> {
  items: RadioButtonsItem<T>[];
  value: T;
  onChange: (value: T) => void;
  variant?: RadioButtonsVariant;
  mapColorByValue?: (value: T) => ColorProps['color'];
}

export const RadioButtons = <Type extends RadioButtonsValue = any>({
  items,
  value,
  onChange,
  variant,
  mapColorByValue,
  ...boxProps
}: RadioButtonsProps<Type>) => {
  const styles = useMultiStyleConfig('RadioButtons', {
    variant,
    ...boxProps,
  });

  return (
    <Box __css={styles.container} {...boxProps}>
      <SimpleGrid columns={items.length}>
        {items.map((item, index) => {
          const isActive = Boolean(value && item.value === value);

          const color = mapColorByValue
            ? mapColorByValue(item.value)
            : undefined;

          return (
            <Box
              key={index}
              __css={{
                ...styles.item,
                ...(isActive
                  ? {
                      ...styles.itemActive,
                      ...(color ? { bg: color } : {}),
                    }
                  : {}),
              }}
              onClick={() => onChange(item.value)}
            >
              {item.label}
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
