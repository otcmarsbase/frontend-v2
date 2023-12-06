import { TextProps, Text, HStack } from '@chakra-ui/react';
import { format as formatNumerable } from 'numerable';

export interface PercentTextProps extends TextProps {
  value: number | string;
  percent?: React.ReactNode;
  percentTextProps?: TextProps;
  format?: '0.0000' | '0,0.X';
  emptyValue?: React.ReactNode;
}

export function PercentText({
  value,
  fontSize,
  percent = '%',
  percentTextProps,
  format = '0.0000',
  emptyValue = '-',
  ...textProps
}: PercentTextProps) {
  return (
    <HStack gap="0" fontSize={fontSize}>
      <Text {...textProps}>
        {value ? formatNumerable(value, format) : emptyValue}&nbsp;
        {percent && (
          <Text {...percentTextProps} as="span" color="dark.50">
            {percent}
          </Text>
        )}
      </Text>
    </HStack>
  );
}
