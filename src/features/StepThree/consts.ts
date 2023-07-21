import * as yup from "yup";


export const StepThreeShema = yup.object().shape({
    ['contractSizeToOffer']: yup.number(),
    ['minDealSize']: yup.number(),
});

export const StepThreeFields = {
    CONTRACT_SIZE_TO_OFFER: 'Contract size to offer',
    MIN_DEAL_SIZE: 'Minimum deal size, $',
}

export const ButtonLabelsByLotType = {
    SAFT: {
        leftBtnLabel: 'In Stablecoins',
        rightBtnLabel: 'In Tokens'
    },
    SAFE: {
        leftBtnLabel: 'In Stablecoins',
        rightBtnLabel: 'In Equity'
    },
    'Token Warrant': {
        leftBtnLabel: 'In Stablecoins',
        rightBtnLabel: 'In Token Shares'
    }
}

export const InputVarsByLotType = {
    SAFE: [
        {
            id: 'contractSizeToOffer',
            fieldLabel: StepThreeFields.CONTRACT_SIZE_TO_OFFER,
        },
        {
            id: 'minDealSize',
            label: StepThreeFields.MIN_DEAL_SIZE
        }
    ],
    SAFT: [
        {
            id: 'contractSizeToOffer',
            fieldLabel: StepThreeFields.CONTRACT_SIZE_TO_OFFER,

        },
        {
            id: 'minDealSize',
            label: StepThreeFields.MIN_DEAL_SIZE
        }
    ],
    'Token Warrant': [
        {
            id: 'contractSizeToOffer',
            fieldLabel: StepThreeFields.CONTRACT_SIZE_TO_OFFER,
        },
        {
            id: 'minDealSize',
            label: StepThreeFields.MIN_DEAL_SIZE
        }
    ]
}
