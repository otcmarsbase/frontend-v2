import { Resource } from '../../../Resource';

export namespace NotificationGetById {
  export type Payload = {
    notificationId: Resource.Notification.NotificationKey['notificationId'];
  };
  export type Result = Resource.Notification.Notification;
}
