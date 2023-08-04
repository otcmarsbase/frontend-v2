import {useEffect, useState} from "react";
import {ETypeOfDeal} from "@app/pages/offers/create/types";

interface IUseFormStepsValidationProps {
    typeOfDeal: ETypeOfDeal,
    SellOfferStore: any
}

interface IUseFormStepsValidationResult {
    showStepTwo: boolean,
    showStepThree: boolean
}

export const useFormStepsValidation = ({typeOfDeal, SellOfferStore}: IUseFormStepsValidationProps): IUseFormStepsValidationResult => {
    const [showStepTwo, setShowStepTwo] = useState(false)
    const [showStepThree, setShowStepThree] = useState(false);

    const {
        stepOneWasOnSuccess,
        stepOneSuccess,
        stepTwoWasOnSuccess,
        stepTwoSuccess
    } = SellOfferStore;

    useEffect(() => {
        let _showStepTwo = stepOneWasOnSuccess || stepOneSuccess;
        if (typeOfDeal === ETypeOfDeal.SELL) {
            setShowStepTwo(prev => _showStepTwo)
        } else {
            setShowStepThree(prev => _showStepTwo)
            setShowStepTwo(prev => false)
        }
    }, [stepOneWasOnSuccess, stepOneSuccess, typeOfDeal]);


    useEffect(() => {
        let _showStepThree = (stepOneWasOnSuccess || stepOneSuccess) && (stepTwoWasOnSuccess || stepTwoSuccess);
        if (typeOfDeal === ETypeOfDeal.SELL) {
            setShowStepThree(prev => _showStepThree)
        }
    }, [stepTwoWasOnSuccess, stepTwoSuccess, typeOfDeal]);

    return {
        showStepTwo,
        showStepThree
    }
}
