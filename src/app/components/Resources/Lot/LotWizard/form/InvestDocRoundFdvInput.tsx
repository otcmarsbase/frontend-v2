import { FC } from 'react';

import { FormElementNumberInput } from './FormElementNumberInput';
import { BaseInputProps } from './types';

const NAME = 'INVEST_DOC_ROUND_FDV';

export const InvestDocRoundFdvInput: FC<BaseInputProps> = () => {
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
