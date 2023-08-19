export namespace Auth {
  export interface GenerateMessageForSignInPayload {
    publicAddress: string;
  }

  export interface GenerateMessageForSignInResult {
    message: string;
  }

  export interface SignInPayload {
    signature: string;
    message: string;
  }

  export interface SignInResult {
    userId: string;
  }
}
