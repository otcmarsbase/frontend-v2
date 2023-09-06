import { TextProps, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

interface MoneyTextProps extends TextProps {
  value: Date | number;
}

export function DateText({ value, ...textProps }: MoneyTextProps) {
  return <Text {...textProps}>{format(value, 'dd.MM.yyyy')}</Text>;
}
