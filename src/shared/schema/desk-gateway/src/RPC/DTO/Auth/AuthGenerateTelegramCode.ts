export namespace AuthGenerateTelegramCode {
  export type Payload = {};
  export type Result = {
    code: string;
    expiresAt: number;
    isExpired: boolean;
  };
}
