import {
  Box,
  useMultiStyleConfig,
  ThemingProps,
  chakra,
} from '@chakra-ui/react';

export interface RadioButtonsItem {
  label: string;
  value: string | number;
}

export interface RadioButtonsProps extends ThemingProps<'Box'> {
  items: RadioButtonsItem[];
  value: RadioButtonsItem['value'];
  onChange: (value: RadioButtonsItem['value']) => void;
}

export const RadioButtons = ({
  items,
  onChange,
  value,
  ...props
}: RadioButtonsProps) => {
  const styles = useMultiStyleConfig('RadioButtons', props);

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

          // console.log({ isActive, item });

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
