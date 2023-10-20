import { UIDictionary } from '@app/dictionary';
import { Resource } from '@schema/otc-desk-gateway';
import Decimal from 'decimal.js';

export const getContractSize = (lot: Resource.Lot.Lot) => {
  const { multiplicator } = UIDictionary.LotMultiplicatorDictionary.get(lot.type);

  if (!lot.attributes.COMMON_UNITS) return null;

  return new Decimal(lot.attributes.COMMON_UNITS).div(multiplicator).toString();
};

export const getMinimumDealSize = (lot: Resource.Lot.Lot) => {
  const { multiplicator } = UIDictionary.LotMultiplicatorDictionary.get(lot.type);

  if (lot.attributes.COMMON_MIN_FILTER_UNITS) {
    return new Decimal(lot.attributes.COMMON_MIN_FILTER_UNITS).div(multiplicator).toString();
  }
  return null;
};

export const getRoundContractSize = (lot: Resource.Lot.Lot) => {
  const { multiplicator } = UIDictionary.LotMultiplicatorDictionary.get(lot.type);

  return new Decimal(lot.attributes.INVEST_DOC_ROUND_UNITS).div(multiplicator).toString();
};
