import { CoreSchema } from '@schema/core';

import { Notification, NotificationKey, NotificationType } from '../../../Resource';

export namespace NotificationList {
  export type Filter = CoreSchema.CompositeFilter<{
    notificationIds?: NotificationKey['notificationId'][];
    type?: NotificationType[];
    isReaded?: boolean;
  }>;

  export type Payload = CoreSchema.WithFilter<Filter> & CoreSchema.WithPagination;
  export type Result = CoreSchema.WithPaginationResult<Notification>;
}
