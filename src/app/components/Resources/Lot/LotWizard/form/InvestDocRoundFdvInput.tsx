import { FC, useEffect } from 'react';

import Decimal from 'decimal.js';

import { FormElementNumberInput } from './FormElementNumberInput';
import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_ROUND_FDV';

export const InvestDocRoundFdvInput: FC<BaseInputProps> = () => {
  const { value, watch, rhfSetValue } = useInput(NAME);

  const INVEST_DOC_ROUND_SUMMARY = watch('INVEST_DOC_ROUND_SUMMARY');

  useEffect(() => {
    if (!(value && INVEST_DOC_ROUND_SUMMARY)) return;

    const INVEST_DOC_ROUND_SHARE = new Decimal(INVEST_DOC_ROUND_SUMMARY).div(value).toNumber();

    rhfSetValue('INVEST_DOC_ROUND_SHARE', INVEST_DOC_ROUND_SHARE);
  }, [value, INVEST_DOC_ROUND_SUMMARY, rhfSetValue]);

  return (
    <FormElementNumberInput
      name={NAME}
      label="Round FDV"
      placeholder="Enter value"
      rightElementText="$"
      tooltip="Fully Diluted Valuation - total market capitalization of a cryptocurrency or token in specifitc round"
    />
  );
};
