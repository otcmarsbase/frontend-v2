import { AuthTelegramConnector, AuthWagmiConnector } from '@app/components';
import { createDictionary } from '@app/dictionary';

import { AuthTelegramConnectorInfo } from './telegram';
import { AuthWagmiConnectorDictionary } from './wagmi';

export type AuthConnectorsType = AuthWagmiConnector | AuthTelegramConnector;

export interface IAuthConnectorInfo {
  type: string;
  title: string;
  description: string;
  logoUrl: string;

  installUrl?: string;
  supportUrl?: string;
  isInstalled?: () => boolean;
}

export const AuthConnectorsDictionary = createDictionary<
  string,
  { info: IAuthConnectorInfo; getConnector: () => AuthConnectorsType }
>();

AuthWagmiConnectorDictionary.keys().forEach((key) =>
  AuthConnectorsDictionary.set(key, {
    info: AuthWagmiConnectorDictionary.get(key),
    getConnector: () => new AuthWagmiConnector(key),
  }),
);

AuthConnectorsDictionary.set('telegram', {
  info: AuthTelegramConnectorInfo,
  getConnector: () => new AuthTelegramConnector(),
});
