import type { AuthTelegramSignInStatus } from '../../../Resource';

export namespace AuthTelegramCheckSignIn {
  export type Payload = {
    code: string;
  };

  export type Result = {
    status: AuthTelegramSignInStatus;
    token?: string | null;
  };
}
