import { useCallback } from 'react';

import { useObserver } from 'mobx-react-lite';

import { Resource } from '@schema/api-gateway';
import { LoadingCallback, useLoadingCallback } from '@shared/ui-kit';

import { AuthConnectorInfo, AuthConnectorType } from '../info';
import { AuthStatusType, AuthStore } from '../stores';

export interface UseAuth {
  status: AuthStatusType;
  isAuthorized: boolean;
  isLoading: boolean;

  authToken?: string;
  account?: Resource.Account.Account;
  connectorInfo?: AuthConnectorInfo;

  signInWithConnector: LoadingCallback<(connectorType: AuthConnectorType) => Promise<void>>;
  signIn: LoadingCallback<() => Promise<void>>;
  signOut: () => Promise<void>;
}

export function useAuth(): UseAuth {
  const store = AuthStore.getStore();

  const { isAuthorized, isLoading, account, connectorInfo, status } = useObserver(() => ({
    isAuthorized: store.isAuthorized,
    isLoading: store.isLoading,
    account: store.account,
    connectorInfo: store.connectorInfo,
    status: store.status,
  }));

  const signInWithConnector = useLoadingCallback(store.signInWithConnector);
  const signIn = useLoadingCallback(store.signIn);
  const signOut = useCallback(async () => store.clearAuth(), [store]);

  return {
    status,
    isAuthorized,
    isLoading,

    account,
    connectorInfo,

    signIn,
    signInWithConnector,
    signOut,
  };
}
