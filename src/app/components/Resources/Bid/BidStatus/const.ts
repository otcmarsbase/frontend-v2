import { createDictionary } from '@app/dictionary';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Property } from 'csstype';

export const BidStatusInfoDictionary = createDictionary<
  DeskGatewaySchema.BidStatus,
  { title: React.ReactNode; color: Property.Color }
>({
  ACTIVE: { title: 'Active', color: 'done' },
  DEAL: { title: 'Deal', color: 'dark.50' },
  ON_MODERATION: { title: 'On moderation', color: '#F9C409' },
  REJECTED: {
    title: 'Rejected',
    color: 'red.500',
  },
  ARCHIVED: {
    title: 'Archived',
    color: 'red.500',
  },
});
