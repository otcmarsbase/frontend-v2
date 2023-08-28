import { useEffect } from 'react';

import { SellOfferStore } from '@app/store';
import { Common } from '@shared/types';

import { ICreateOfferFieldTypes } from '../types';
import { isValidField } from '../utils';

interface IUseCustomFieldValidation {
  data: ICreateOfferFieldTypes;
  direction: Common.Direction;
  sellOfferStore: SellOfferStore;
}
export const useSummaryStepsValidation = ({
  data,
  direction,
  sellOfferStore,
}: IUseCustomFieldValidation) => {
  const {
    setStepOneSuccess,
    setStepOneWasOnSuccess,
    setStepTwoSuccess,
    setStepTwoWasOnSuccess,
    typeOfPricingModel,
    setStepThreeSuccess,
    setStepThreeWasOnSuccess,
    setBasicInfo,
  } = sellOfferStore;

  useEffect(() => {
    const {
      projectName,
      projectWebsite,
      telegram,
      investmentRound,
      roundFDV,
      contractValue,
      lotType,
      contractSizeToOffer,
      minDealSize,
      minEquityBid,
      equityToOffer,
      minTokenBid,
      tokensToOffer,
      minTokenShareBid,
      tokenShareToOffer,
      targetFDV,
    } = data;
    const stepOnePassed =
      isValidField(projectName) &&
      isValidField(projectWebsite) &&
      isValidField(telegram) &&
      isValidField(lotType);
    setStepOneSuccess(stepOnePassed);
    if (stepOnePassed) {
      setStepOneWasOnSuccess(true);
    }
    let stepTwoPassed: boolean;

    stepTwoPassed =
      isValidField(investmentRound) &&
      isValidField(roundFDV) &&
      isValidField(contractValue);
    setStepTwoSuccess(stepTwoPassed);
    if (stepTwoPassed) {
      setStepTwoWasOnSuccess(true);
    }

    let additionalDep = false;
    if (typeOfPricingModel === 'IN_STABLECOIN') {
      additionalDep =
        isValidField(contractSizeToOffer) && isValidField(minDealSize);
    } else if (typeOfPricingModel === 'IN_EQUITY') {
      additionalDep = isValidField(equityToOffer) && isValidField(minEquityBid);
    } else if (typeOfPricingModel === 'IN_TOKEN') {
      additionalDep = isValidField(tokensToOffer) && isValidField(minTokenBid);
    } else if (typeOfPricingModel === 'IN_TOKEN_SHARES') {
      additionalDep =
        isValidField(tokenShareToOffer) && isValidField(minTokenShareBid);
    }
    const stepThreePassed = additionalDep && isValidField(targetFDV);

    setStepThreeSuccess(stepThreePassed);
    if (stepTwoPassed) {
      setStepThreeWasOnSuccess(true);
    }
    console.log('data', data);
    setBasicInfo(data);
  }, [
    data,
    setBasicInfo,
    setStepOneSuccess,
    setStepOneWasOnSuccess,
    setStepThreeSuccess,
    setStepThreeWasOnSuccess,
    setStepTwoSuccess,
    setStepTwoWasOnSuccess,
    direction,
    typeOfPricingModel,
  ]);
};
