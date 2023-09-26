import { EPricingModel } from '../../types';

import { EStepTypes, StepsText } from './constants';
import { IGetTargetFieldsProps, INormFieldsReturn } from './types';

export const getTargetFields = ({
  step,
  lotType,
  pricingModel,
}: IGetTargetFieldsProps): Array<string[]> => {
  let targetFields = [];
  if (EStepTypes.FIRST_STEP === step) {
    targetFields = Object.entries(StepsText[step]);
  } else if (EStepTypes.SECOND_STEP === step) {
    targetFields = Object.entries(StepsText[step][lotType]);
  } else {
    const isPricingModelExist =
      StepsText[step][lotType].hasOwnProperty(pricingModel);
    targetFields = Object.entries(
      StepsText[step][lotType][
        isPricingModelExist ? pricingModel : EPricingModel.IN_STABLECOIN
      ],
    );
  }
  return targetFields;
};

export const normalizeFields = ({
  targetFields,
  data,
}): INormFieldsReturn[] => {
  return targetFields.reduce(
    (acc, curValue) => [
      ...acc,
      {
        name: curValue[1],
        value: data[curValue[0]]?.toString(),
      },
    ],
    [],
  );
};