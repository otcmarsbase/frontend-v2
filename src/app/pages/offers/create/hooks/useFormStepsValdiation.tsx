import { useEffect, useState } from 'react';

interface IUseFormStepsValidation {
  typeOfDeal: string;
  sellOfferStore: any;
}
export const useFormStepsValidation = ({
  typeOfDeal,
  sellOfferStore,
}: IUseFormStepsValidation) => {
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
    if (typeOfDeal === 'Sell') {
      setShowStepTwo((prev) => _showStepTwo);
    } else {
      setShowStepThree((prev) => _showStepTwo);
      setShowStepTwo((prev) => false);
    }
  }, [stepOneWasOnSuccess, stepOneSuccess, typeOfDeal]);

  useEffect(() => {
    let _showStepThree =
      (stepOneWasOnSuccess || stepOneSuccess) &&
      (stepTwoWasOnSuccess || stepTwoSuccess);
    if (typeOfDeal === 'Sell') {
      setShowStepThree((prev) => _showStepThree);
    }
  }, [
    stepTwoWasOnSuccess,
    stepTwoSuccess,
    typeOfDeal,
    stepOneWasOnSuccess,
    stepOneSuccess,
  ]);

  return {
    showStepTwo,
    showStepThree,
  };
};
