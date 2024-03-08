import * as SchemaCommon from '@schema/common';

import { Resource } from '../../Resource';

export namespace Common {
  export namespace Enums {
    export type NotificationType = keyof ValueObjects.NotificationPayloadMap;
    export const NotificationType = [
      'SYSTEM_INFO',
      'DEAL_CREATED',
      'DEAL_STATUS_CHANGED',
      'LOT_CREATED',
      'LOT_STATUS_CHANGED',
      'BID_RECEIVED',
      'BID_STATUS_CHANGED',
      'USER_REGISTERED',
      'USER_PROFILE_CHANGED',
    ] satisfies NotificationType[];

    export const NotificationRecipientType = ['PUBLIC', 'OWNER_ID'] as const;
    export type NotificationRecipientType = (typeof NotificationRecipientType)[number];
  }

  export namespace ValueObjects {
    export interface NotificationPayloadMap {
      SYSTEM_INFO: {
        text: string;
      };
      DEAL_CREATED: {
        deal: Resource.Deal.Deal;
      };
      DEAL_STATUS_CHANGED: {
        deal: Resource.Deal.Deal;
      };
      LOT_CREATED: {
        lot: Resource.Lot.Lot;
      };
      LOT_STATUS_CHANGED: {
        lot: Resource.Lot.Lot;
      };
      BID_RECEIVED: {
        bid: Resource.Bid.Bid;
      };
      BID_STATUS_CHANGED: {
        bid: Resource.Bid.Bid;
      };
      USER_REGISTERED: {
        user: Resource.User.User;
      };
      USER_PROFILE_CHANGED: {
        user: Resource.User.User;
      };
    }
  }
  export type NotificationPayload<Type extends Enums.NotificationType> = ValueObjects.NotificationPayloadMap[Type];

  export interface NotificationRecipient extends SchemaCommon.Resource<'notification_recipient'> {
    recipientId: string;
  }
}
