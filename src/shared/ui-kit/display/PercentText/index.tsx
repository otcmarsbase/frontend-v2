import { TextProps, Text, HStack } from '@chakra-ui/react';
import { format as formatNumerable } from 'numerable';

export interface PercentTextProps extends TextProps {
  value: number | string;
  addon?: React.ReactNode;
  format?: '0.0000';
  emptyValue?: React.ReactNode;
}

export function PercentText({
  value,
  addon,
  fontSize,
  format = '0.0000',
  emptyValue = '-',
  ...textProps
}: PercentTextProps) {
  return (
    <HStack gap="0" fontSize={fontSize}>
      <Text {...textProps}>{value ? formatNumerable(value, format) : emptyValue} %</Text>
      {addon && value && <>&nbsp;{addon}</>}
    </HStack>
  );
}
