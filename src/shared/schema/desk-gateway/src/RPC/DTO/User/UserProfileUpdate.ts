import { Resource } from '../../../Resource';

export namespace UserProfileUpdate {
  export type Payload = {
    firstName?: string;
    lastName?: string;
    telegram?: Resource.Common.Text.Telegram;
    email?: Resource.Common.Text.Email;
    location?: Resource.Common.Enums.Location;
  };
  export type Result = void;
}
