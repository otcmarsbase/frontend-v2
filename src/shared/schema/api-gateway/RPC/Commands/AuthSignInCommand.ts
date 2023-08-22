import { Resource } from '../../Resource';

export namespace AuthSignInCommand {
  export type Payload = {
    message: Resource.Auth.EvmWalletMessage;
    signature: string;
  };
  export type Result = string;
}
