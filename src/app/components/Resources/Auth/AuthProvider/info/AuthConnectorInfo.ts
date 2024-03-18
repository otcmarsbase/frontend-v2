import { AuthTelegramConnector, AuthWagmiConnector } from '@app/components';
import { createDictionary } from '@app/dictionary';


import { AuthTelegramConnectorInfo } from './telegram/AuthTelegramConnectorInfo';
import { AuthWagmiConnectorDictionary } from './wagmi';

export type AuthConnectorsType = AuthWagmiConnector | AuthTelegramConnector

export interface IAuthConnectorInfo {
  type: string;
  title: string;
  description: string;
  logoUrl: string;
  getConnector: () => AuthConnectorsType

  installUrl?: string;
  supportUrl?: string;
  isInstalled?: () => boolean;
}


export const AuthConnectorsDictionary = createDictionary<string, IAuthConnectorInfo>()

AuthWagmiConnectorDictionary
  .keys()
  .forEach((key) => (
    AuthConnectorsDictionary.set(key, AuthWagmiConnectorDictionary.get(key))
  ))
AuthConnectorsDictionary.set('telegram', AuthTelegramConnectorInfo)

