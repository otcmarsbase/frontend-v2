import { Resource } from '@schema/api-gateway';
import { Property } from 'csstype';

export const LotTypeTitleMap = new Map<Resource.Lot.LotType, React.ReactNode>([
  ['SAFE', 'SAFE'],
  ['SAFT', 'SAFT'],
  ['TOKEN_WARRANT', 'Token warrant'],
]);

export const LotTypeColorMap = new Map<Resource.Lot.LotType, Property.Color>([
  ['SAFE', '#EF5DA8'],
  ['SAFT', '#5D5FEF'],
  ['TOKEN_WARRANT', '#FF5B37'],
]);
