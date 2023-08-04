import {useEffect} from "react";
import {isValidField} from "@app/pages/offers/create/utils";
import {EPricingModel, ETypeOfDeal, ICreateOfferFieldTypes} from "@app/pages/offers/create/types";

interface IUseCustomFieldValidation {
    data: ICreateOfferFieldTypes,
    typeOfDeal: ETypeOfDeal,
    SellOfferStore: any
}
export const useSummaryStepsValidation = ({data, typeOfDeal, SellOfferStore}: IUseCustomFieldValidation) => {
    const {
        setStepOneSuccess,
        setStepOneWasOnSuccess,
        setStepTwoSuccess,
        setStepTwoWasOnSuccess,
        typeOfPricingModel,
        setStepThreeSuccess,
        setStepThreeWasOnSuccess,
        setBasicInfo

    } = SellOfferStore;

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
            targetFDV
        } = data;
        const stepOnePassed = isValidField(projectName) && isValidField(projectWebsite) && isValidField(telegram) && isValidField(lotType);
        setStepOneSuccess(stepOnePassed)
        if (stepOnePassed) {
            setStepOneWasOnSuccess(true);
        }
        let stepTwoPassed: boolean;

        stepTwoPassed = isValidField(investmentRound) && isValidField(roundFDV) && isValidField(contractValue);
        setStepTwoSuccess(stepTwoPassed)
        if (stepTwoPassed) {
            setStepTwoWasOnSuccess(true)
        }

        let additionalDep = false;
        if(typeOfPricingModel === EPricingModel.IN_STABLECOIN){
            additionalDep = isValidField(contractSizeToOffer) && isValidField(minDealSize);
        }else if(typeOfPricingModel === EPricingModel.IN_EQUITY){
            additionalDep = isValidField(equityToOffer) && isValidField(minEquityBid);
        }else if(typeOfPricingModel === EPricingModel.IN_TOKEN){
            additionalDep = isValidField(tokensToOffer) && isValidField(minTokenBid);
        }else if(typeOfPricingModel === EPricingModel.IN_TOKEN_SHARES){
            additionalDep = isValidField(tokenShareToOffer) && isValidField(minTokenShareBid);
        }
        const stepThreePassed = additionalDep && isValidField(targetFDV)

        setStepThreeSuccess(stepThreePassed)
        if (stepTwoPassed) {
            setStepThreeWasOnSuccess(true)
        }

        setBasicInfo(data)
    }, [data, typeOfDeal])
}
