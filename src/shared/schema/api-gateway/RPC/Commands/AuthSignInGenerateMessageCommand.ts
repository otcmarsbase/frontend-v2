import { Resource } from '../../Resource';

export namespace AuthSignInGenerateMessageCommand {
  export type Payload = {
    address: string;
  };

  export type Result = Resource.Auth.EvmWalletMessage;
}
