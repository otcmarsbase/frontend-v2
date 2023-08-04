import {
  Box,
  useMultiStyleConfig,
  chakra,
  ColorProps,
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
  ...props
}: RadioButtonsProps<Type>) => {
  const styles = useMultiStyleConfig('RadioButtons', { variant, ...props });

  return (
    <Box __css={styles.container} {...props}>
      <chakra.div
        __css={{
          ...styles.grid,
          gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        }}
      >
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
      </chakra.div>
    </Box>
  );
};
