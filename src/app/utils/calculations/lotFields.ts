import { UIDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import Decimal from 'decimal.js';

export const getContractSize = (lot: DeskGatewaySchema.Lot) => {
  const { multiplicator } = UIDictionary.LotMultiplicatorDictionary.get(lot.type);

  if (!lot.attributes.COMMON_UNITS) return null;

  return new Decimal(lot.attributes.COMMON_UNITS).div(multiplicator).toString();
};

export const getMinimumDealSize = (lot: DeskGatewaySchema.Lot) => {
  const { multiplicator } = UIDictionary.LotMultiplicatorDictionary.get(lot.type);

  if (!lot.attributes.COMMON_MIN_FILTER_UNITS) return null;

  return new Decimal(lot.attributes.COMMON_MIN_FILTER_UNITS).div(multiplicator).toString();
};

export const getRoundContractSize = (lot: DeskGatewaySchema.Lot) => {
  const { multiplicator } = UIDictionary.LotMultiplicatorDictionary.get(lot.type);

  if (!lot.attributes.INVEST_DOC_ROUND_UNITS) return null;

  return new Decimal(lot.attributes.INVEST_DOC_ROUND_UNITS).div(multiplicator).toString();
};
