import { Resource } from '@schema/common';

export namespace Auth {
  export interface AuthGeneratedMessage
    extends Resource<'auth_generated_message'> {
    address: string;
    message: string;
    signature_hash: string;
  }
}
