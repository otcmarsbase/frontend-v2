import { DeskGatewaySchema } from '@schema/desk-gateway';

export function getNotificationTitle(notification: DeskGatewaySchema.Notification) {
  switch (notification.type) {
    case 'LOT_CREATED':
      return 'Lot: Created';
    case 'LOT_STATUS_CHANGED':
      return 'Lot: Status changed';
    case 'BID_RECEIVED':
      return 'Bid: Received';
    case 'BID_STATUS_CHANGED':
      return 'Bid: Status changed';
    case 'DEAL_CREATED':
      return 'Deal: Created';
    case 'DEAL_STATUS_CHANGED':
      return 'Deal: Status changed';
    case 'LOT_QUESTION_PUBLISHED':
      return 'Question: Published';
    case 'LOT_QUESTION_RECEIVED':
      return 'Question: Received';
    default:
      return '';
  }
}
