import { request } from '@packages/rpc-client';

import { BackendApiService } from '../service';

import { Auth } from './types';

export const siteApi = (service: BackendApiService) => ({
  auth: {
    generateMessageForSignIn: (payload: Auth.GenerateMessageForSignInPayload) =>
      request<Auth.GenerateMessageForSignInResult>(
        'auth.generateMessageForSignIn',
        payload,
      ),

    signIn: (payload: Auth.SignInPayload) =>
      request<Auth.SignInResult>('auth.signIn', payload),

    logOut: () => {
      return service.params.onLogout();
    },
  },
});

export * from './types';
export * from './error';

export type SiteApiSchemaType = ReturnType<typeof siteApi>;
