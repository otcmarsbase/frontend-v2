import { MBPages } from '@app/pages';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { Router } from 'router5';

export function handleNotificationClick(router: Router, notification: DeskGatewaySchema.Notification) {
  switch (notification.type) {
    case 'LOT_CREATED':
    case 'LOT_STATUS_CHANGED':
      return router.navigateComponent(
        MBPages.Lot.__id__,
        {
          id: getTypedPayload<'LOT_CREATED' | 'LOT_STATUS_CHANGED'>(notification.payload).lot.id,
        },
        {},
      );
    case 'BID_RECEIVED':
    case 'BID_STATUS_CHANGED':
      return router.navigateComponent(MBPages.Dashboard.Bids, {}, {});
    case 'DEAL_CREATED':
    case 'DEAL_STATUS_CHANGED':
      return router.navigateComponent(
        MBPages.Deal.__id__,
        {
          id: getTypedPayload<'DEAL_CREATED' | 'DEAL_STATUS_CHANGED'>(notification.payload).deal.id,
        },
        {},
      );
    case 'LOT_QUESTION_PUBLISHED':
    case 'LOT_QUESTION_RECEIVED':
      return router.navigateComponent(
        MBPages.Lot.__id__,
        {
          id: getTypedPayload<'LOT_QUESTION_PUBLISHED' | 'LOT_QUESTION_RECEIVED'>(notification.payload).lotQuestion
            .lotKey.id,
        },
        {},
      );
  }
}

function getTypedPayload<T extends DeskGatewaySchema.NotificationType>(payload: unknown) {
  return payload as DeskGatewaySchema.NotificationPayload<T>;
}
