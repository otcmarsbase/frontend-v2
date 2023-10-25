export namespace AuthSignIn {
  export type Payload = {
    message: string;
    signatureHash: string;
    signature: string;
  };
  export type Result = void;
}
