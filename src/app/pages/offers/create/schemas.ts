import * as yup from 'yup';

export const TokenDetailsSchema = yup.object().shape({
  contractSizeToOffer: yup.number(),
  minDealSize: yup.number(),
  tokenShareToOffer: yup.number(),
  minTokenShareBid: yup.number(),
  equityToOffer: yup.number(),
  minEquityBid: yup.number(),
  tokensToOffer: yup.number(),
  minTokenBid: yup.number(),

  targetFDV: yup.number(),
  pricePerEquity: yup.number(),
  targetTokenPrice: yup.number(),
  offerTheBestBid: yup.number(),
});

export const TokenInfoSchema = yup.object().shape({
  investmentRound: yup.string().required(`Investment round is required`),
  roundFDV: yup.number().required(`Round FDV is required`),

  contractValue: yup.number().required(`Contract value is required`),
  dates: yup.string(),
  alreadyOver: yup.boolean(),
  lockupPeriod: yup.number(),
  vestingPeriod: yup.number(),

  totalEquityBought: yup.number(),
  pricePerEquityPriceInfo: yup.number(),
  tokensBought: yup.number(),
  pricePerTokenPriceInfo: yup.number(),
  tokensShareBought: yup.number(),
  pricePerTokensPriceInfo: yup.number(),
});

export const ProjectInfoSchema = yup.object().shape({
  projectName: yup.string().required(`Project Name is required`),
  projectWebsite: yup.string().required(`Project Website is required`),
  lotType: yup.string().required(`Need to select at least one`),
  typesOfSeller: yup.array(),
  typesOfBuyer: yup.array(),
  telegram: yup.string().required(`Telegram is required`),
  isReAssigned: yup.boolean(),
  deadlineDate: yup.string(),
  isDirectSeller: yup.boolean(),
  noLimitations: yup.boolean(),
  isPermanent: yup.boolean(),
  isTokenWarrant: yup.boolean(),
  isReadyToSVP: yup.boolean(),
});

export const SellOfferSchema =
  ProjectInfoSchema.concat(TokenInfoSchema).concat(TokenDetailsSchema);