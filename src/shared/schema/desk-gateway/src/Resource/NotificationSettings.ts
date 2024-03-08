import * as SchemaCommon from '@schema/common';

import { Common } from './NotificationCommon';

export namespace NotificationSettings {
  export interface NotificationSettingsKey extends SchemaCommon.ResourceKey<'notification_settings'> {
    id: number;
  }

  export type NotificationSettingsParams = Partial<Record<Common.Enums.NotificationType, boolean>>;

  export interface NotificationSettings
    extends SchemaCommon.Resource<'notification_settings'>,
      SchemaCommon.ResourceOmit<NotificationSettingsKey> {
    id: number;
    userId: string;
    settings: NotificationSettingsParams;
  }
}
