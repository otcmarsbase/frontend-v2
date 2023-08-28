import { useEffect, useState } from 'react';

import { Common } from '@shared/types';

interface IUseFormStepsValidationProps {
  direction: Common.Direction;
  sellOfferStore: any;
}

interface IUseFormStepsValidationResult {
  showStepTwo: boolean;
  showStepThree: boolean;
}

export const useFormStepsValidation = ({
  direction,
  sellOfferStore,
}: IUseFormStepsValidationProps): IUseFormStepsValidationResult => {
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [showStepThree, setShowStepThree] = useState(false);

  const {
    stepOneWasOnSuccess,
    stepOneSuccess,
    stepTwoWasOnSuccess,
    stepTwoSuccess,
  } = sellOfferStore;

  useEffect(() => {
    let _showStepTwo = stepOneWasOnSuccess || stepOneSuccess;
    if (direction === 'SELL') {
      setShowStepTwo((prev) => _showStepTwo);
    } else {
      setShowStepThree((prev) => _showStepTwo);
      setShowStepTwo((prev) => false);
    }
  }, [stepOneWasOnSuccess, stepOneSuccess, direction]);

  useEffect(() => {
    let _showStepThree =
      (stepOneWasOnSuccess || stepOneSuccess) &&
      (stepTwoWasOnSuccess || stepTwoSuccess);
    if (direction === 'SELL') {
      setShowStepThree((prev) => _showStepThree);
    }
  }, [
    stepTwoWasOnSuccess,
    stepTwoSuccess,
    direction,
    stepOneWasOnSuccess,
    stepOneSuccess,
  ]);

  useEffect(() => {
    let _showStepThree =
      (stepOneWasOnSuccess || stepOneSuccess) &&
      (stepTwoWasOnSuccess || stepTwoSuccess);
    if (direction === 'SELL') {
      setShowStepThree((prev) => _showStepThree);
    }
  }, [
    stepTwoWasOnSuccess,
    stepTwoSuccess,
    direction,
    stepOneWasOnSuccess,
    stepOneSuccess,
  ]);

  return {
    showStepTwo,
    showStepThree,
  };
};
