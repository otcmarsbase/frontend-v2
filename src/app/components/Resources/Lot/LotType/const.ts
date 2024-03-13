import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Property } from 'csstype';

export const LotTypeTitleMap = new Map<DeskGatewaySchema.LotType, React.ReactNode>([
  ['SAFE', 'SAFE'],
  ['SAFT', 'SAFT'],
  ['TOKEN_WARRANT', 'Token warrant'],
  ['EQUITY', 'Equity'],
  ['UNLOCKED_TOKENS', 'Unlocked tokens'],
]);

export const LotTypeColorMap = new Map<DeskGatewaySchema.LotType, Property.Color>([
  ['SAFE', '#EF5DA8'],
  ['SAFT', '#5D5FEF'],
  ['TOKEN_WARRANT', '#FF5B37'],
  ['EQUITY', '#9851FF'],
  ['UNLOCKED_TOKENS', '#4ED1FA'],
]);
