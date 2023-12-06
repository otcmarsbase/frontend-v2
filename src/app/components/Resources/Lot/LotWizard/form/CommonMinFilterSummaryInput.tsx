import { FC } from 'react';

import { formatNumberProps } from './formatNumberProps';
import { FormElementNumberInput } from './FormElementNumberInput';
import { BaseInputProps } from './types';

const NAME = 'COMMON_MIN_FILTER_SUMMARY';

export const CommonMinFilterSummaryInput: FC<BaseInputProps> = () => {
  return (
    <FormElementNumberInput
      name={NAME}
      label="Minimum deal size"
      placeholder="In stablecoin"
      rightElementText="$"
      gridProps={{ gridTemplateColumns: '12rem 2fr' }}
      {...formatNumberProps()}
    />
  );
};
