import { TextProps, Text } from '@chakra-ui/react';
import { format } from 'numerable';

interface MoneyTextProps extends TextProps {
  value: number | string;
  abbreviated?: boolean;
  addon?: React.ReactNode;
}

export function MoneyText({ value, abbreviated, addon, ...textProps }: MoneyTextProps) {
  return (
    <Text {...textProps}>
      {format(value, `0.00${abbreviated ? 'a' : ''}`)}
      {addon && <>&nbsp;{addon}</>}
    </Text>
  );
}
