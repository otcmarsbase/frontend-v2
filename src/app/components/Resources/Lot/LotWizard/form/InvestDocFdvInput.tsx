import { FC, useCallback } from 'react';

import Decimal from 'decimal.js';

import { FormControlNumberInput } from './FormControlNumberInput';
import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'INVEST_DOC_FDV';

export const InvestDocFdvInput: FC<BaseInputProps> = () => {
  const { rhfSetValue, watch } = useInput(NAME);

  

  return (
    <FormControlNumberInput
      name={NAME}
      label="Target FDV"
      placeholder="Amount"
      rightElementText="$"
      tooltip="FDV = market price * maximum supply"
    />
  );
};
