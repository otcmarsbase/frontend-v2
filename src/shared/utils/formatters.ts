import { CurrencySignDictionary, UIDictionary } from '@app/dictionary';
import { format as formatNumerable } from 'numerable';

export interface FormatToMoneyOptions {
  format?: string | null | undefined;
  abbreviated?: boolean;
  currencyType?: UIDictionary.CurrencyType;
  emptyValue?: string;
  currencyPlacement?: 'start' | 'end';
}

const defaultFormatToMoneyOptions: FormatToMoneyOptions = {
  format: '0,0[.]####',
  abbreviated: true,
  currencyType: 'USD',
  emptyValue: '-',
  currencyPlacement: 'start',
};

export const formatToMoney = (value: number, options: FormatToMoneyOptions = defaultFormatToMoneyOptions) => {
  const { abbreviated, format, emptyValue, currencyType, currencyPlacement } = {
    ...defaultFormatToMoneyOptions,
    ...options,
  };

  const addon = CurrencySignDictionary.get(currencyType);

  const formattedValue = formatNumerable(value, `${format}${abbreviated ? 'a' : ''}`);

  console.log({ formattedValue });

  return value
    ? currencyPlacement === 'start'
      ? `${addon} ${formattedValue}`
      : `${formattedValue} ${addon}`
    : emptyValue;
};
