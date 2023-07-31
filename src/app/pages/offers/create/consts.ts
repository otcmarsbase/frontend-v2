import {TokenInfoFields} from "@app/pages/offers/create/components/TokenInfo/consts";

export const STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE = {
    SAFE: [
        {
            id: 'totalEquityBought',
            fieldLabel: TokenInfoFields.TOTAL_EQUITY_BOUGHT,
        },
        {
            id: 'pricePerEquityPriceInfo',
            fieldLabel: TokenInfoFields.PRICE_PER_EQUITY,
        },
    ],
    SAFT: [
        {
            id: 'tokensBought',
            fieldLabel: TokenInfoFields.TOKENS_BOUGHT,
        },
        {
            id: 'pricePerTokenPriceInfo',
            fieldLabel: TokenInfoFields.PRICE_PER_TOKEN,
        },
    ],
    'Token Warrant': [
        {
            id: 'tokensShareBought',
            fieldLabel: TokenInfoFields.TOKENS_SHARE_BOUGHT,
        },
        {
            id: 'PRICE_PER_TOKENS',
            fieldLabel: TokenInfoFields.PRICE_PER_TOKENS,
        },
    ],
};
