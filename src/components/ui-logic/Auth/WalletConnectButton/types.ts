export const WalletConnectorType = ['metamask'] as const;
export type WalletConnectorType = (typeof WalletConnectorType)[number];

export interface WalletConnectorInfo {
  type: WalletConnectorType;
  title: string;
  description: string;

  logo: string;
  installUrl: string;
  supportUrl: string;
}

export type WalletSignature = `0x${string}`;
