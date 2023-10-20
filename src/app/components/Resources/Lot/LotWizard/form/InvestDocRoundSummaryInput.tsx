import { FC, useEffect } from 'react';

import Decimal from 'decimal.js';

import { FormElementNumberInput } from './FormElementNumberInput';
import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_ROUND_SUMMARY';

export const InvestDocRoundSummaryInput: FC<BaseInputProps> = () => {
  const { value, watch, rhfSetValue } = useInput(NAME);

  const INVEST_DOC_ROUND_FDV = watch('INVEST_DOC_ROUND_FDV');

  useEffect(() => {
    if (!(value && INVEST_DOC_ROUND_FDV)) return;

    const INVEST_DOC_ROUND_SHARE = new Decimal(value).div(INVEST_DOC_ROUND_FDV).toNumber();

    rhfSetValue('INVEST_DOC_ROUND_SHARE', INVEST_DOC_ROUND_SHARE);
  }, [value, INVEST_DOC_ROUND_FDV, rhfSetValue]);

  return (
    <FormElementNumberInput
      name={NAME}
      label="Contract value"
      placeholder="Enter value"
      rightElementText="$"
      tooltip="What is the contract value?"
    />
  );
};
