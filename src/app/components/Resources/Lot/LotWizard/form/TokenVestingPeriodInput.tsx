import { FC } from 'react';

import { FormElementNumberInput } from './FormElementNumberInput';
import { BaseInputProps } from './types';

const NAME = 'TOKEN_VESTING_PERIOD';

export const TokenVestingPeriodInput: FC<BaseInputProps> = () => {
  return (
    <FormElementNumberInput name={NAME} label="Vesting calendar" placeholder="Enter value" rightElementText="months" />
  );
};
