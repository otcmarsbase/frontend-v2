import { useCallback, useMemo, useState } from 'react';

import { useObserver } from 'mobx-react-lite';

import { useRpcSchemaClient } from '@app/components';
import { usePortal } from '@packages/berish-react-portal';
import { Resource } from '@schema/api-gateway';
import { LoadingCallback, useLoadingCallback } from '@shared/ui-kit';
import { connect, signMessage } from '@wagmi/core';
import { useAccount } from 'wagmi';

import { AuthSignInModal } from '../../AuthSignInModal';
import { AuthConnectorDictionary, AuthConnectorInfo, AuthConnectorType } from '../info';
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

  const signOut = useCallback(async () => {
    store.clearAuth();
  }, [store]);

  // Sign in with modal

  const signInWithConnector = useLoadingCallback(store.signInWithConnector);

  const { open } = usePortal(AuthSignInModal);
  const signIn = useLoadingCallback(
    useCallback(async () => {
      // setSignInStep('CONNECTOR_SELECT');
      // await open({});
      // setSignInStep('NONE');
    }, [open]),
  );

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
