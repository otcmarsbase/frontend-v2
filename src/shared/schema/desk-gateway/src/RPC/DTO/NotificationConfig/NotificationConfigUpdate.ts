import { Resource } from '../../../Resource';

export namespace NotificationConfigUpdate {
  export type Payload = {
    settings: Resource.NotificationConfig.ValueObjects.NotificationTypesSettings;
  };

  export type Result = void;
}
