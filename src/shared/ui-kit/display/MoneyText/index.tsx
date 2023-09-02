import { TextProps, Text, HStack } from '@chakra-ui/react';
import { format } from 'numerable';

interface MoneyTextProps extends TextProps {
  value: number | string;
  abbreviated?: boolean;
  addon?: React.ReactNode;
}

export function MoneyText({ value, abbreviated, addon, fontSize, ...textProps }: MoneyTextProps) {
  return (
    <HStack gap="0" fontSize={fontSize}>
      <Text {...textProps}>{format(value, `0.00${abbreviated ? 'a' : ''}`)}</Text>
      {addon && <>&nbsp;{addon}</>}
    </HStack>
  );
}
