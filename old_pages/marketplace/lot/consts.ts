import { ILotView } from './types';

export const LotViewDefaultValues: ILotView = {
  amountToSell: null,
  amountToBuy: null,
  giveFunds: null,
  getFunds: null,
  typeOfUser: null,
  isUserDirectBuyer: false,
  location: '',
  readyForKYC: false,
};

export const LOT_VIEW_MAIN_CHIP_FIELDS = {
  typeOfBidder: 'Type of bidder',
  roundTokenPrice: 'Round token price',
  lotEquityPrice: 'Lot Equity price',
  lotFDV: 'Lot FDV',
  minBid: 'Min bid',
  investmentRound: 'Investment round',
  typeOfBider: 'Type of bider',
  typeOfTransfer: 'Type of transfer',
  estimateTGEdate: 'Estimated TGE date',
  lockupPeriod: 'Lockup period',

  vestingCalendar: 'Vesting calendar',
  roundFDV: 'Round FDV',
};
