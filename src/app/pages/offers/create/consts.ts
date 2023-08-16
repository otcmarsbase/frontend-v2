import {
  ELotType,
  TLotType,
} from '@app/pages/offers/create/components/ProjectInfo/types';
import { TokenInfoFields } from '@app/pages/offers/create/components/TokenInfo/constants';
import { ICreateOfferFieldTypes } from '@app/pages/offers/create/types';

export const formDefaultValues: ICreateOfferFieldTypes = {
  typesOfBuyer: [],
  typesOfSeller: [],
  projectName: '',
  projectWebsite: '',
  lotType: ELotType.SAFE,
  telegram: '',
  deadlineDate: new Date(),
  investmentRound: '',
  targetFDV: null,
  tokensBought: null,
  roundFDV: null,
  contractValue: null,
  contractSizeToOffer: null,
  minDealSize: null,
  equityToOffer: null,
  minEquityBid: null,
  tokensToOffer: null,
  minTokenBid: null,
  minTokenShareBid: null,
  tokenShareToOffer: null,
  pricePerEquity: null,
  pricePerTokenPriceInfo: null,
  totalEquityBought: null,
};

export const STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE: Record<TLotType, {}> = {
  [ELotType.SAFE]: [
    {
      id: 'totalEquityBought',
      fieldLabel: TokenInfoFields.TOTAL_EQUITY_BOUGHT,
    },
    {
      id: 'pricePerEquityPriceInfo',
      fieldLabel: TokenInfoFields.PRICE_PER_EQUITY,
    },
  ],
  [ELotType.SAFT]: [
    {
      id: 'tokensBought',
      fieldLabel: TokenInfoFields.TOKENS_BOUGHT,
    },
    {
      id: 'pricePerTokenPriceInfo',
      fieldLabel: TokenInfoFields.PRICE_PER_TOKEN,
    },
  ],
  [ELotType.TOKEN_WARRANT]: [
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
