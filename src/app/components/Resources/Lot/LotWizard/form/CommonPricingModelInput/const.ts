import { createDictionary, ReadonlyDictionary } from '@app/dictionary';
import { Resource } from '@schema/desk-gateway';

export type PricingModelType = 'SUMMARY' | 'UNITS';

const SummaryDescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, string>()
  .setFromEntries([
    ['SAFE', 'In Stablecoin'],
    ['SAFT', 'In Stablecoin'],
    ['TOKEN_WARRANT', 'In Stablecoin'],
  ])
  .asReadonly();

const UnitsDescriptorDictionary = createDictionary<Resource.Lot.Enums.LotType, string>()
  .setFromEntries([
    ['SAFE', 'In Equity'],
    ['SAFT', 'In Tokens'],
    ['TOKEN_WARRANT', 'In Token Shares'],
  ])
  .asReadonly();

export const DescriptorDictionary = createDictionary<
  PricingModelType,
  ReadonlyDictionary<Resource.Lot.Enums.LotType, string>
>().setFromEntries([
  ['SUMMARY', SummaryDescriptorDictionary],
  ['UNITS', UnitsDescriptorDictionary],
]);
