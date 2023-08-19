import * as yup from "yup";
interface IAssetsSchema {
    sortBy: string,
    onlyReAssigned: boolean,
    onlyValidated: boolean,
    directlyByDealType: boolean,
}
export const HEADER_FIELD_TITLES_BY_PARAM = {
    averagePerPurchase: 'Average per purchase',
    averagBidsFDV: 'Average Bids FDV',
    averageLotFDV: 'Average Lot FDV',
    marketPrice: 'Market price',
    offersOnSell: 'Offers on sell',
    offersOnBuy: 'Offers on buy',
    lotValueOnSell: 'Lot value on sell',
    lotValueOnBuy: 'Lot value on buy'
}

export const AssetsSchema = yup.object().shape({
    sortBy: yup.string(),
    onlyReAssigned: yup.boolean(),
    onlyValidated: yup.boolean(),
    directlyByDealType: yup.boolean()
});
