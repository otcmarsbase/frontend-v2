import {
  Box,
  useMultiStyleConfig,
  ThemingProps,
  chakra,
  SystemStyleObject,
} from '@chakra-ui/react';

type RadioButtonsValue = string | number;

export interface RadioButtonsItem<Type extends RadioButtonsValue> {
  label: string;
  value: Type;
}

export type RadioButtonsVariant = 'solid' | 'outline';

export interface RadioButtonsProps<T extends RadioButtonsValue>
  extends ThemingProps<'Box'> {
  items: RadioButtonsItem<T>[];
  value: T;
  onChange: (value: T) => void;
  variant?: RadioButtonsVariant;
}

export const RadioButtons = <Type extends RadioButtonsValue = any>({
  items,
  onChange,
  value,
  variant,
  ...props
}: RadioButtonsProps<Type>) => {
  const styles = useMultiStyleConfig('RadioButtons', { variant, ...props });

  const solidStyles = {
    bgGradient: 'linear(203deg, #C74A26 0%, #E24400 45.83%, #981807 100%)',
    border: 'none',
  };

  // TODO: Приходится сейчас так костылить, нужно разобраться почему
  // в `theme/components/radioButtons` не работает стилизация вариантов
  const buttonCss = variant === 'solid' ? solidStyles : {};

  return (
    <Box __css={styles.container}>
      <chakra.div
        __css={{
          ...styles.grid,
          gridTemplateColumns: `repeat(${items.length}, 1fr)`,
        }}
      >
        {items.map((item, index) => {
          const isActive = Boolean(value && item.value === value);

          return (
            <Box
              key={index}
              __css={{
                ...styles.item,
                ...(isActive ? styles.itemActive : {}),
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
