import {useEffect, useState} from "react";
import {isValidField} from "@app/pages/offers/create/utils";

interface IUseFormStepsValidation {
    typeOfDeal: string,
    SellOfferStore: any
}
export const useFormStepsValidation = ({typeOfDeal, SellOfferStore}: IUseFormStepsValidation) => {
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
        if (typeOfDeal === 'Sell') {
            setShowStepTwo(prev => _showStepTwo)
        } else {
            setShowStepThree(prev => _showStepTwo)
            setShowStepTwo(prev => false)
        }
    }, [stepOneWasOnSuccess, stepOneSuccess, typeOfDeal]);


    useEffect(() => {
        let _showStepThree = (stepOneWasOnSuccess || stepOneSuccess) && (stepTwoWasOnSuccess || stepTwoSuccess);
        if (typeOfDeal === 'Sell') {
            setShowStepThree(prev => _showStepThree)
        }
    }, [stepTwoWasOnSuccess, stepTwoSuccess, typeOfDeal]);

    return {
        showStepTwo,
        showStepThree
    }
}
