export namespace AuthTelegramCheckSignIn {
  export type Payload = {
    code: string;
  };

  export type Result = string | null;
}
