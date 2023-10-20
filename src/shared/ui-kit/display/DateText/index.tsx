import { FormatDateType, formatDate } from '@app/utils';
import { TextProps, Text } from '@chakra-ui/react';

interface MoneyTextProps extends TextProps {
  value: Date | number;
  format?: FormatDateType;
}

export function DateText({ value, format = 'ONLY_DATE', ...textProps }: MoneyTextProps) {
  return <Text {...textProps}>{formatDate(value, format)}</Text>;
}
