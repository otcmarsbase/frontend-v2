import * as SchemaCommon from '@schema/common';

import { Resource } from '../../Resource';

export namespace Notification {
  export interface NotificationKey extends SchemaCommon.ResourceKey<'notification'> {
    notificationId: string;
  }

  export interface Notification<Type extends Resource.NotificationCommon.Enums.NotificationType = Resource.NotificationCommon.Enums.NotificationType>
    extends SchemaCommon.Resource<'notification'>,
      SchemaCommon.ResourceOmit<NotificationKey> {
    type: Type;
    createdAt: number;
    payload: Resource.NotificationCommon.NotificationPayload<Type>;
    isReaded: boolean;
  }
}
