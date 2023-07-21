import * as yup from "yup";

export const YupTokenInfoShema = yup.object().shape({
    ['investmentRound']: yup.string().required(`Investment round is required`),
    ['roundFDV']: yup.number().required(`Round FDV is required`),
    ['targetFDV']: yup.number(),
    ['pricePerEquity']: yup.number(),
    ['contractValue']: yup.number().required(`Contract value is required`),
    ['dates']: yup.object(),
    ['alreadyOver']: yup.boolean(),
    ['lockupPeriod']: yup.number(),
    ['vestingPeriod']: yup.number(),


});

export const TokenInfoFields = {
    INVESTMENT_ROUND: 'Investment round',
    ROUND_FDV: 'Round FDV',
    CONTRACT_VALUE: 'Contract value',
    DATES: 'Dates',
    LOOKUP_PERIOD: 'Lockup period',
    VESTING_PERIOD: 'Vesting period',
    ALREADY_OVER: 'Already over',
    PRICE_INFO: 'Price information',
    TARGET_FDV: 'Target FDV',
    PRICE_PER_EQUITY: 'Price per 0,01% equity'
}


