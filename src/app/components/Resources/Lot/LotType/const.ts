import { Resource } from '@schema/otc-desk-gateway';
import { Property } from 'csstype';

export const LotTypeTitleMap = new Map<Resource.Lot.Enums.LotType, React.ReactNode>([
  ['SAFE', 'SAFE'],
  ['SAFT', 'SAFT'],
  ['TOKEN_WARRANT', 'Token warrant'],
]);

export const LotTypeColorMap = new Map<Resource.Lot.Enums.LotType, Property.Color>([
  ['SAFE', '#EF5DA8'],
  ['SAFT', '#5D5FEF'],
  ['TOKEN_WARRANT', '#FF5B37'],
]);
