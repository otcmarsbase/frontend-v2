import { useCallback } from 'react';

import { useObserver } from 'mobx-react-lite';

import { useStore } from '@app/store';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { LoadingCallback, useLoadingCallback } from '@shared/ui-kit';

import { IAuthConnectorInfo } from '../info';

export interface UseAuth {
  status: string;
  isAuthorized: boolean;
  isLoading: boolean;

  authToken?: string;
  account?: DeskGatewaySchema.Account;
  connectorInfo?: IAuthConnectorInfo;

  signIn: LoadingCallback<() => Promise<void>>;
  onShowConnectModal: LoadingCallback<() => Promise<void>>;
  signOut: () => Promise<void>;
  updateAccount: (account: DeskGatewaySchema.Account) => Promise<void>;
}

export function useAuth(): UseAuth {
  const { authStore: store } = useStore();

  const { isAuthorized, isLoading, account, connectorInfo, status } = useObserver(() => ({
    isAuthorized: store.isAuthorized,
    isLoading: store.isLoading,
    account: store.account,
    connectorInfo: store.connectorInfo,
    status: store.status,
  }));

  const signIn = useLoadingCallback(store.signIn);
  const onShowConnectModal = useLoadingCallback(store.onShowConnectModal);
  const signOut = useCallback(async () => store.clearAuth(), [store]);

  return {
    status,
    isAuthorized,
    isLoading,

    account,
    connectorInfo,

    signIn,
    onShowConnectModal,
    signOut,
    updateAccount: store.updateAccount,
  };
}
