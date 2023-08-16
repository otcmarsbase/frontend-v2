import Decimal from 'decimal.js';

import {
  ELotType,
  TInvAccType,
  TLotType,
} from './components/ProjectInfo/types';

export interface IHandleRecountProps {
  curIds: ICreateOfferFieldTypes[];
  id: ICreateOfferFieldTypes;
  value: string;
}
export interface ITypeOfDeal {
  typeOfDeal: ETypeOfDeal;
}

export type TPricingModel =
  | 'In Stablecoin'
  | 'In Token Shares'
  | 'In Token'
  | 'In Equity';
export enum EPricingModel {
  IN_STABLECOIN = 'In Stablecoin',
  IN_TOKEN_SHARES = 'In Token Shares',
  IN_TOKEN = 'In Token',
  IN_EQUITY = 'In Equity',
}

export enum ETypeOfDeal {
  SELL = 'Sell',
  BUY = 'Buy',
}

export const StepThreeRecountFieldByLotType: Record<TLotType, string> = {
  [ELotType.SAFE]: 'totalEquityBought',
  [ELotType.SAFT]: 'tokensBought',
  [ELotType.TOKEN_WARRANT]: 'tokensShareBought',
};

export type TCreateOfferFieldTypes =
  | 'contractSizeToOffer'
  | 'minDealSize'
  | 'tokenShareToOffer'
  | 'minTokenShareBid'
  | 'equityToOffer'
  | 'minEquityBid'
  | 'tokensToOffer'
  | 'minTokenBid'
  | 'targetFDV'
  | 'pricePerEquity'
  | 'targetTokenPrice'
  | 'offerTheBestBid'
  | 'investmentRound'
  | 'roundFDV'
  | 'contractValue'
  | 'dates'
  | 'alreadyOver'
  | 'lockupPeriod'
  | 'vestingPeriod'
  | 'totalEquityBought'
  | 'pricePerEquityPriceInfo'
  | 'tokensBought'
  | 'pricePerTokenPriceInfo'
  | 'tokensShareBought'
  | 'pricePerTokensPriceInfo'
  | 'projectName'
  | 'projectWebsite'
  | 'lotType'
  | 'typesOfSeller'
  | 'typesOfBuyer'
  | 'telegram'
  | 'isReAssigned'
  | 'deadlineDate'
  | 'isDirectSeller'
  | 'noLimitations'
  | 'isPermanent'
  | 'isTokenWarrant'
  | 'isReadyToSVP';

export interface IStepThreeRecountResult {
  _bindedID: TCreateOfferFieldTypes;
  _result: number;
  _currentID: TCreateOfferFieldTypes;
}
export interface IStepThreeRecountProps {
  contractSizeToOffer: Decimal;
  contractValue: Decimal;
  targetFDV: Decimal;
  roundFDV: Decimal;
  equityToOffer: Decimal;
  _value: Decimal;
  denom: Decimal;
  pricingModel: EPricingModel;
  currentID: TCreateOfferFieldTypes;
  bindedID: TCreateOfferFieldTypes;
}

export interface IHandleRecountValue {
  currentID: TCreateOfferFieldTypes;
  bindedID: TCreateOfferFieldTypes;
  value: string;
  pricingModel: EPricingModel;
}

export interface IReorderItemsProps {
  curIds: ICreateOfferFieldTypes[];
  id: ICreateOfferFieldTypes;
}

export interface ICreateOfferFieldTypes {
  typesOfBuyer: TInvAccType[];
  typesOfSeller: TInvAccType[];
  projectName: string;
  projectWebsite: string;
  lotType: TLotType;
  telegram: string;
  deadlineDate: Date;
  investmentRound: string;
  targetFDV: number;
  tokensBought: number;
  roundFDV: number;
  contractValue: number;
  contractSizeToOffer: number;
  minDealSize: number;
  equityToOffer: number;
  minEquityBid: number;
  tokensToOffer: number;
  minTokenBid: number;
  minTokenShareBid: number;
  tokenShareToOffer: number;
  pricePerEquity: number;
  pricePerTokenPriceInfo: number;
  totalEquityBought: number;
}
