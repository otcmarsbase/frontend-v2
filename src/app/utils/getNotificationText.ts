import { DeskGatewaySchema } from '@schema/desk-gateway';

import { DealStatusDictionary, LotStatusDictionary } from '../dictionary/resources';

export function getNotificationText(notification: DeskGatewaySchema.Notification) {
  switch (notification.type) {
    case 'LOT_CREATED':
      return 'New lot added to the platform.';
    case 'LOT_STATUS_CHANGED':
      return `Lot moderation status changed. (${
        LotStatusDictionary.get(getTypedPayload<'LOT_STATUS_CHANGED'>(notification.payload).lot.status).title
      })`;
    case 'BID_RECEIVED':
      return 'New bid received for a deal.';
    case 'BID_STATUS_CHANGED':
      return `Bid moderation status changed. (${
        getTypedPayload<'BID_STATUS_CHANGED'>(notification.payload).bid.status
      })`;
    case 'DEAL_CREATED':
      return 'New deal created successfully.';
    case 'DEAL_STATUS_CHANGED':
      return `Deal status updated. (${
        DealStatusDictionary.get(getTypedPayload<'DEAL_STATUS_CHANGED'>(notification.payload).deal.status).title
      })`;
    default:
      return '';
  }
}

function getTypedPayload<T extends DeskGatewaySchema.NotificationType>(payload: unknown) {
  return payload as DeskGatewaySchema.NotificationPayload<T>;
}
