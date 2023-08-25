import { Resource } from '../../Resource';

export namespace AuthGenerateMessage {
  export type Payload = {
    domain: string;
    uri: string;
    address: string;
  };

  export type Result = Resource.Auth.AuthGeneratedMessage;
}
