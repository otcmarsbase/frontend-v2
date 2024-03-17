import { appManager, ModalController } from '@app/logic';
import { PortalInstanceControl } from '@packages/berish-react-portal';

import { AuthTelegramConnectorInfo, IAuthTelegramConnectorInfo } from '../info/telegram/IAuthTelegramConnectorInfo';
import { AuthTelegramVerifyModal, AuthTelegramVerifyModalProps } from '../modals/AuthTelegramVerifyModal';

import { IAuthConnector } from './IAuthConnector';

export type AuthTelegramStatusType = 'CODE_SENT' | 'CODE_EXPIRED';

export class AuthTelegramConnector implements IAuthConnector<AuthTelegramStatusType, IAuthTelegramConnectorInfo>{
  private _status: AuthTelegramStatusType | null;

  private _verifyModalResolver?: PortalInstanceControl<AuthTelegramVerifyModalProps, void>;



  get info() {
    return AuthTelegramConnectorInfo
  }

  get status() {
    if (this._status) return this._status

    return null
  }

  async execute(): Promise<void> {
    await this._generateMessage()
    return Promise.resolve(undefined);
  }

  private async _generateMessage() {
    const { schema } = appManager.serviceManager.backendApiService;

    const data = await schema.send('auth.generateTelegramCode', {})

    if (data?.code) {
      this._verifyModalResolver = ModalController.create(AuthTelegramVerifyModal, { code: data.code })
    }
  }

}
