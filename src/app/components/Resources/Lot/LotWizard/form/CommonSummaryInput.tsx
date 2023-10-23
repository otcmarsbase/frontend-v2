import { FC, useEffect } from 'react';

import { FormControlNumberInput } from './FormControlNumberInput';
import { BaseInputProps } from './types';
import { useInput } from './useInput';

const NAME = 'COMMON_SUMMARY';

export const CommonSummaryInput: FC<BaseInputProps> = () => {
  const { value, watch, setValue, trigger } = useInput(NAME);

  const [INVEST_DOC_ROUND_SUMMARY] = watch(['INVEST_DOC_ROUND_SUMMARY']);

  useEffect(() => {
    if (!INVEST_DOC_ROUND_SUMMARY || value) return;

    setValue(INVEST_DOC_ROUND_SUMMARY);
    trigger();
  }, [value, INVEST_DOC_ROUND_SUMMARY, setValue, trigger]);

  return (
    <FormControlNumberInput
      name={NAME}
      label="Contract size to offer"
      placeholder="Amount"
      rightElementText="$"
      tooltip="The amount of sale in this lot. The seller will receive this amount."
    />
  );
};
