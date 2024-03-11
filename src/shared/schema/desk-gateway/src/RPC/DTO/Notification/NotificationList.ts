import { CompositeFilter, Pagination, QueryListPayload } from '@schema/common';

import { Resource } from '../../../Resource';

export namespace NotificationList {
  export type Filter = CompositeFilter<{
    notificationIds?: Resource.Notification.NotificationKey['notificationId'][];
    type?: Resource.NotificationCommon.Enums.NotificationType[];
    isReaded?: boolean;
  }>;

  export type Payload = QueryListPayload<Filter>;
  export type Result = Pagination<Resource.Notification.Notification>;
}
