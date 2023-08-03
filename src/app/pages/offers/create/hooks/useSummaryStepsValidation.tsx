import { useEffect } from 'react';
import { isValidField } from '../utils';

interface IUseCustomFieldValidation {
  data: any;
  typeOfDeal: string;
  sellOfferStore: any;
}
export const useSummaryStepsValidation = ({
  data,
  typeOfDeal,
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
    if (typeOfPricingModel === 'In Stablecoin') {
      additionalDep =
        isValidField(contractSizeToOffer) && isValidField(minDealSize);
    } else if (typeOfPricingModel === 'In Equity') {
      additionalDep = isValidField(equityToOffer) && isValidField(minEquityBid);
    } else if (typeOfPricingModel === 'In Token') {
      additionalDep = isValidField(tokensToOffer) && isValidField(minTokenBid);
    } else if (typeOfPricingModel === 'In Token Shares') {
      additionalDep =
        isValidField(tokenShareToOffer) && isValidField(minTokenShareBid);
    }
    const stepThreePassed = additionalDep && isValidField(targetFDV);

    setStepThreeSuccess(stepThreePassed);
    if (stepTwoPassed) {
      setStepThreeWasOnSuccess(true);
    }

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
    typeOfDeal,
    typeOfPricingModel,
  ]);
};
