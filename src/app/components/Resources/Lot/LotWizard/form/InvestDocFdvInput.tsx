import { FC } from 'react';

import { FormControlNumberInput } from './FormControlNumberInput';
import { BaseInputProps } from './types';

const NAME = 'INVEST_DOC_FDV_INPUT';

export const InvestDocFdvInput: FC<BaseInputProps> = () => {
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
