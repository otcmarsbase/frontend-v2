import { IAuthConnectorInfo } from '../AuthConnectorInfo';

import telegramLogo from './assets/telegram.svg';

export const AuthTelegramConnectorType = ['telegram'] as const;

export type AuthTelegramConnectorType = (typeof AuthTelegramConnectorType)[number];

export interface AuthTelegramConnectorInfoType extends IAuthConnectorInfo {
  type: AuthTelegramConnectorType
}

export const AuthTelegramConnectorInfo: AuthTelegramConnectorInfoType = {
  type: 'telegram',
  title: 'Telegram',
  description: 'Quick connection via messenger',
  logoUrl: telegramLogo,
}
