import { TextProps, Text, HStack } from '@chakra-ui/react';
import { format as formatNumerable } from 'numerable';

interface MoneyTextProps extends TextProps {
  value: number | string;
  abbreviated?: boolean;
  addon?: React.ReactNode;
  format?: '0.00' | '0,00';
}

export function MoneyText({ value, abbreviated, addon, fontSize, format = '0.00', ...textProps }: MoneyTextProps) {
  return (
    <HStack gap="0" fontSize={fontSize}>
      <Text {...textProps}>{formatNumerable(value, `${format}${abbreviated ? 'a' : ''}`)}</Text>
      {addon && <>&nbsp;{addon}</>}
    </HStack>
  );
}
