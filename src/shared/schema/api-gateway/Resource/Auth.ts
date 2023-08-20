export namespace Auth {
  export type AuthProviderType = 'evm_wallet';

  export interface AuthProvider {
    resource: 'auth_provider';
    identity: string;
  }

  export interface Session {
    resource: 'session';
    session_id: string;
    created_at: number;
    user_id: string;
  }

  export interface EvmWalletMessage {
    resource: 'auth_evm_message';
    message: string;
    address: string;
    nonce: string;
    timestamp: number;
    signatureHash: string;
  }
}
