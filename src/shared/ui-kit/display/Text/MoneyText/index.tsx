import { TextProps, Text, HStack } from '@chakra-ui/react';
import { format as formatNumerable } from 'numerable';

interface MoneyTextProps extends TextProps {
  value: number | string;
  abbreviated?: boolean;
  addon?: React.ReactNode;
  format?: string | null | undefined;
  emptyValue?: React.ReactNode;
}

export function MoneyText({
  value,
  abbreviated,
  addon,
  fontSize,
  format = '0,0[.]####',
  emptyValue = '-',
  ...textProps
}: MoneyTextProps) {
  return (
    <HStack gap="0" fontSize={fontSize}>
      <Text {...textProps}>{value ? formatNumerable(value, `${format}${abbreviated ? 'a' : ''}`) : emptyValue}</Text>
      {addon && value && <>&nbsp;{addon}</>}
    </HStack>
  );
}
