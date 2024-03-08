import * as SchemaCommon from '@schema/common';

import { Resource } from '../../Resource';

export namespace NotificationConfig {
  export namespace ValueObjects {
    export type NotificationTypesSettings = Record<Resource.NotificationCommon.Enums.NotificationType, boolean>;
  }

  export interface NotificationConfig extends SchemaCommon.Resource<'notification_config'> {
    settings: ValueObjects.NotificationTypesSettings;
  }
}
