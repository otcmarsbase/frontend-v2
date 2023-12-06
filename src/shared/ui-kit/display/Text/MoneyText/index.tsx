import { CurrencySignDictionary, UIDictionary } from '@app/dictionary';
import { TextProps, Text, HStack } from '@chakra-ui/react';
import { format as formatNumerable } from 'numerable';

interface MoneyTextProps extends TextProps {
  value: number | string;
  abbreviated?: boolean;
  currency?: UIDictionary.CurrencyType;
  currencyTextProps?: TextProps;
  currencyPlacement?: 'start' | 'end';
  format?: string | null | undefined;
  emptyValue?: React.ReactNode;
}

export function MoneyText({
  value,
  abbreviated,
  currency = 'USD',
  currencyPlacement = 'start',
  currencyTextProps,
  fontSize,
  format = '0,0[.]####',
  emptyValue = '-',
  ...textProps
}: MoneyTextProps) {
  const renderedAddon = currency && value && (
    <>
      {currencyPlacement === 'end' && <>&nbsp;</>}
      <Text {...currencyTextProps}>{CurrencySignDictionary.get(currency)}</Text>
      {currencyPlacement === 'start' && <>&nbsp;</>}
    </>
  );

  return (
    <HStack gap="0" fontSize={fontSize}>
      {currencyPlacement === 'start' && renderedAddon}
      <Text {...textProps}>{value ? formatNumerable(value, `${format}${abbreviated ? 'a' : ''}`) : emptyValue}</Text>
      {currencyPlacement === 'end' && renderedAddon}
    </HStack>
  );
}
